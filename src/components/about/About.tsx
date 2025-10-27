import React from 'react';
import styles from './About.module.css';
import profilePic from '../../assets/images/profilePicture.jpg';

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.heroSection}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.title}>Meet the Engineer!</h1>
            <p className={styles.subtitle}>
              Computer Engineering Student on the Path to Software Innovation
            </p>
          </div>

          <div className={styles.profileSection}>
            <div className={styles.profileImageContainer}>
              <img 
                src={profilePic} 
                alt="Mohit Manna" 
                className={styles.profileImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
