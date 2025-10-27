import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import links from './links.json';
import logo from '../../assets/logo.svg';

type Link = {
  id: number;
  name: string;
  url: string;
};

const Nav: React.FC = () => {
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
            <Link to={link.url}>{link.name}</Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;




