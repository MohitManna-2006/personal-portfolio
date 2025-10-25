import React from 'react';
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
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>

      <div className={styles['links-container']}>
        {links.map((link: Link) => (
          <div key={link.id} className={styles.link}>
            <a href={link.url}>{link.name}</a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;




