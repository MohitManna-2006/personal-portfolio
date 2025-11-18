import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './PillNav.css';

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface PillNavProps {
  logo: string;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
  onLogoClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  activeHref,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#fff',
  pillColor = '#060010',
  hoveredPillTextColor = '#060010',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true,
  onLogoClick
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | HTMLElement | null>(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach(circle => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        // Hover circle now covers entire pill, no need for complex calculations
        gsap.set(circle, {
          scale: 0,
          transformOrigin: 'center center',
          background: 'rgba(0, 0, 0, 0)'
        });

        const label = pill.querySelector<HTMLElement>('.pill-label');
        const white = pill.querySelector<HTMLElement>('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: 0, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        // Scale circle to cover entire pill with solid black background
        tl.to(circle, { 
          scale: 1, 
          background: 'rgba(0, 0, 0, 1)',
          duration: 0.3, 
          ease, 
          overwrite: 'auto' 
        }, 0);

        // Hide default black label
        if (label) {
          tl.to(label, { opacity: 0, duration: 0.3, ease, overwrite: 'auto' }, 0);
        }

        // Show white label for contrast on black background
        if (white) {
          gsap.set(white, { color: '#fff', y: 0 });
          tl.to(white, { opacity: 1, color: '#fff', duration: 0.3, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener('resize', onResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1 });
    }

    if (initialLoadAnimation) {
      const logo = logoRef.current;
      const navItems = navItemsRef.current;

      if (logo) {
        gsap.set(logo, { scale: 0 });
        gsap.to(logo, {
          scale: 1,
          duration: 0.6,
          ease
        });
      }

      if (navItems && initialLoadAnimation) {
        // Only animate on initial load for desktop, skip on mobile
        const isMobile = window.innerWidth <= 768;
        if (!isMobile) {
          gsap.set(navItems, { opacity: 0, scaleX: 0, transformOrigin: 'left center' });
          gsap.to(navItems, {
            opacity: 1,
            scaleX: 1,
            duration: 0.6,
            ease,
            delay: 0.1
          });
        } else {
          // On mobile, just ensure it's visible (though it will be hidden by CSS)
          gsap.set(navItems, { opacity: 1, scaleX: 1 });
        }
      }
    }

    return () => window.removeEventListener('resize', onResize);
  }, [items, ease, initialLoadAnimation]);

  // Ensure labels are visible when activeHref changes or component updates
  useEffect(() => {
    // Reset all pills to default state (visible labels, no hover)
    circleRefs.current.forEach((circle) => {
      if (!circle?.parentElement) return;
      const pill = circle.parentElement as HTMLElement;
      const label = pill.querySelector<HTMLElement>('.pill-label');
      const white = pill.querySelector<HTMLElement>('.pill-label-hover');
      
      // Ensure default label is visible
      if (label) {
        gsap.set(label, { opacity: 1, color: '#000', y: 0 });
      }
      // Ensure hover label is hidden
      if (white) {
        gsap.set(white, { opacity: 0, color: '#fff', y: 0 });
      }
      // Reset circle
      gsap.set(circle, { scale: 0, background: 'rgba(0, 0, 0, 0)' });
    });
  }, [activeHref]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    
    // Reset the animation to the beginning
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto',
      onComplete: () => {
        // Ensure labels are properly reset after animation
        const circle = circleRefs.current[i];
        if (!circle?.parentElement) return;
        const pill = circle.parentElement as HTMLElement;
        const label = pill.querySelector<HTMLElement>('.pill-label');
        const white = pill.querySelector<HTMLElement>('.pill-label-hover');
        
        // Force reset labels to ensure they're visible
        if (label) {
          gsap.set(label, { opacity: 1, color: '#000' });
        }
        if (white) {
          gsap.set(white, { opacity: 0, color: '#fff' });
        }
        // Reset circle
        gsap.set(circle, { scale: 0, background: 'rgba(0, 0, 0, 0)' });
      }
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.set(img, { rotate: 0 });
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10, scaleY: 1 },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.3,
            ease,
            transformOrigin: 'top center'
          }
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          scaleY: 1,
          duration: 0.2,
          ease,
          transformOrigin: 'top center',
          onComplete: () => {
            gsap.set(menu, { visibility: 'hidden' });
          }
        });
      }
    }

    onMobileMenuClick?.();
  };

  const isHashLink = (href?: string) => href && href.startsWith('#');

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHashLink(href)) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const cssVars = {
    ['--base']: baseColor,
    ['--pill-bg']: pillColor,
    ['--hover-text']: hoveredPillTextColor,
    ['--pill-text']: resolvedPillTextColor
  } as React.CSSProperties;

  return (
    <div className={`pill-nav-container ${className}`}>
      <nav className={`pill-nav`} aria-label="Primary" style={cssVars}>
        <a
          className="pill-logo"
          href="#home"
          aria-label="Home"
          onMouseEnter={handleLogoEnter}
          onClick={(e) => {
            if (onLogoClick) {
              onLogoClick(e);
            } else {
              handleLinkClick(e, '#home');
            }
          }}
          ref={el => {
            logoRef.current = el;
          }}
        >
          <img src={logo} alt={logoAlt} ref={logoImgRef} />
        </a>

        <div className="pill-nav-items desktop-only" ref={navItemsRef}>
          <ul className="pill-list" role="menubar">
            {items.map((item, i) => (
              <li key={item.href} role="none">
                <a
                  role="menuitem"
                  href={item.href}
                  className={`pill${activeHref === item.href ? ' is-active' : ''}`}
                  aria-label={item.ariaLabel || item.label}
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                  onClick={(e) => {
                    handleLinkClick(e, item.href);
                    // Reset hover state immediately on click to prevent stuck state
                    handleLeave(i);
                  }}
                >
                  <span
                    className="hover-circle"
                    aria-hidden="true"
                    ref={el => {
                      circleRefs.current[i] = el;
                    }}
                  />
                  <span className="label-stack">
                    <span className="pill-label">{item.label}</span>
                    <span className="pill-label-hover" aria-hidden="true">
                      {item.label}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="mobile-menu-button mobile-only"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          ref={hamburgerRef}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      <div className={`mobile-menu-popover mobile-only ${isMobileMenuOpen ? 'is-open' : ''}`} ref={mobileMenuRef} style={cssVars}>
        <ul className="mobile-menu-list">
          {items.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`mobile-menu-link${activeHref === item.href ? ' is-active' : ''}`}
                onClick={(e) => {
                  handleLinkClick(e, item.href);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;
