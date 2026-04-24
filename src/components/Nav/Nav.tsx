import React, { useEffect, useState, useRef } from 'react';
import PillNav from '../PillNav';
import logo from '../../assets/logo.svg';

const Nav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('#home');
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const lastScrollY = useRef<number>(0);

  // Collapse/expand navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 100; // Collapse after scrolling down 100px
      const isMobile = window.innerWidth <= 768;

      // On mobile, don't collapse the navbar
      if (isMobile) {
        setIsCollapsed(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY < scrollThreshold) {
        // Always show full navbar at top of page
        setIsCollapsed(false);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down - collapse to logo
        setIsCollapsed(true);
      } else {
        // Scrolling up - expand full navbar
        setIsCollapsed(false);
      }

      lastScrollY.current = currentScrollY;

      // Update active section
      const sections = ['#home', '#experience', '#skills', '#contact'];
      const navbar = document.querySelector('nav') as HTMLElement | null;
      const navHeight = navbar?.offsetHeight ?? 72;
      const scrollPosition = currentScrollY + navHeight + 100;

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

  const navItems = [
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Always scroll to top when logo is clicked
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Expand navbar when clicking logo
    setIsCollapsed(false);
  };

  return (
    <PillNav
      logo={logo}
      logoAlt="Mohit Manna Logo"
      items={navItems}
      activeHref={activeSection}
      ease="power2.easeOut"
      baseColor="#000000"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#000000"
      initialLoadAnimation={true}
      className={isCollapsed ? 'collapsed' : ''}
      onLogoClick={handleLogoClick}
    />
  );
};

export default Nav;
