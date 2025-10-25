import styles from './Home.module.css';

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroSection}>
        <div className={styles.content}>
          <div className={styles.greeting}>
            <span className={styles.hi}>Hi, I'm</span>
            <h1 className={styles.name}>Mohit Manna</h1>
          </div>
          
          <div className={styles.titleSection}>
            <h2 className={styles.title}>Personal Portfolio</h2>
            <p className={styles.subtitle}>
              Computer Engineering Student @ Purdue University
            </p>
          </div>

          <div className={styles.description}>
            <p>
              
            </p>
          </div>

          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>
              View My Work
            </button>
            <button className={styles.secondaryBtn}>
              Get In Touch
            </button>
          </div>
        </div>

        <div className={styles.visualElement}>
          <div className={styles.floatingCard}>
            <div className={styles.cardContent}>
              <div className={styles.icon}>💻</div>
              <span>Building the future</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
