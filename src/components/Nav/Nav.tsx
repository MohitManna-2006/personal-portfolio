import React, { useEffect, useState } from 'react';
import styles from './Nav.module.css';
import links from './links.json';
import logo from '../../assets/logo.svg';

type Link = {
  id: number;
  name: string;
  url: string;
};

/**
 * Converts route paths to section IDs for scroll-to-section navigation
 * e.g., "/" -> "#home", "/experience" -> "#experience"
 */
const pathToSectionId = (path: string): string => {
  if (path === '/') return '#home';
  if (path.startsWith('/')) {
    return `#${path.slice(1).toLowerCase()}`;
  }
  return `#${path.toLowerCase()}`;
};

/**
 * Scrolls smoothly to a section by ID, accounting for fixed navbar height
 * Uses scroll-margin-top from the section element for proper offset
 */
const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId);
  if (element) {
    // Use scrollIntoView with block: 'start' and let CSS scroll-margin-top handle the offset
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const Nav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('#home');

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#home', '#experience', '#skills', '#contact'];
      const navbar = document.querySelector('nav') as HTMLElement | null;
      const navHeight = navbar?.offsetHeight ?? 72;
      const scrollPosition = window.scrollY + navHeight + 100; // Add some offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i]);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    const sectionId = pathToSectionId(url);
    scrollToSection(sectionId);
  };

  const isActive = (url: string): boolean => {
    const sectionId = pathToSectionId(url);
    return activeSection === sectionId;
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles['logo-container']}>
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
        >
          <img src={logo} alt="Logo" className={styles.logo} />
        </a>
      </div>

      <div className={styles['links-container']}>
        {links.map((link: Link) => {
          const sectionId = pathToSectionId(link.url);
          return (
            <div key={link.id} className={styles.link}>
              <a 
                href={sectionId}
                onClick={(e) => handleLinkClick(e, link.url)}
                className={isActive(link.url) ? styles.activeLink : ''}
              >
                {link.name}
              </a>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;




