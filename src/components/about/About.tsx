import React from 'react';
import styles from './About.module.css';
import profilePic from '../../assets/images/profilePic.png';

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.heroSection}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.title}>Meet the Engineer!</h1>
          </div>

          <div className={styles.profileSection}>
            <div className={styles.profileImageContainer}>
              <div className={styles.profileGlow}></div>
              <img 
                src={profilePic} 
                alt="Mohit Manna" 
                className={styles.profileImage}
              />
            </div>
            
            <div className={styles.glassmorphismCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Hello! I'm Mohit Manna</h3>
                <p className={styles.cardSubtitle}>Purdue Computer Engineering | Full Stack & AI Builder</p>
              </div>
              
              <div className={styles.cardContent}>
                <ul className={styles.featureList}>
                  <li className={styles.featureItem}>
                    <span className={styles.featureIcon}>✈️</span>
                    Sophomore student @ Purdue University
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.featureIcon}>🚗</span>
                    Interested in full stack development & AI 
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.featureIcon}>🏎️</span>
                    The Data Mine, Vertically Integrated Projects, Purdue Stack
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.featureIcon}>✨</span>
                    Enthusastic about software advances
                  </li>
                </ul>

                
                <div className={styles.cardFooter}>
                  <p className={styles.cardDescription}>
                    Driven to engineer tech that empowers people.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
