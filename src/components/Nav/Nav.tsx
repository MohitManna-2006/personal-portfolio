import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Nav.module.css';
import links from './links.json';
import logo from '../../assets/logo.svg';

type Link = {
  id: number;
  name: string;
  url: string;
};

const Nav: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.toLowerCase().startsWith(path.toLowerCase());
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles['logo-container']}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
      </div>

      <div className={styles['links-container']}>
        {links.map((link: Link) => (
          <div key={link.id} className={styles.link}>
            <Link 
              to={link.url} 
              className={isActive(link.url) ? styles.activeLink : ''}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;




