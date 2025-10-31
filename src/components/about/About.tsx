import React from 'react';
import styles from './About.module.css';
import profilePic from '../../assets/images/profilePic.png';
import { useTilt } from '../../hooks/useTilt';
import { useMagnetic } from '../../hooks/useMagnetic';

const About: React.FC = () => {
  const { containerRef, tiltX, tiltY, isVisible, isActive } = useTilt({ maxTiltDeg: 12, perspective: 1050, followStrength: 0.12, deadzone: 0.08, inertia: 0.10 });
  const involvedMag = useMagnetic<HTMLSpanElement>({ radius: 14, maxTranslate: 14 });
  const focusMag = useMagnetic<HTMLSpanElement>({ radius: 14, maxTranslate: 14 });
  const [photoHover, setPhotoHover] = React.useState(false);

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.heroSection}>
        <div className={styles.content}>
          {/* Page heading */}
          <div className={styles.header}>
            <h1 className={`${styles.titleModern} ${styles.stagger0}`}>Meet the Engineer!</h1>
            <div className={styles.titleUnderline} aria-hidden="true" />
          </div>

          {/* Two-column: photo + info card */}
          <div className={styles.profileSection}>
            {/* Photo */}
            <div className={`${styles.profileImageContainer} ${styles.photoWrap} ${photoHover || isActive ? styles.ringSpin : ''}`} aria-hidden="true" onMouseEnter={() => setPhotoHover(true)} onMouseLeave={() => setPhotoHover(false)}>
              <div className={styles.profileGlow}></div>
              <div className={styles.photoAmbient} />
              <div className={styles.photoRing} />
              <img
                src={profilePic}
                alt="Portrait of Mohit Manna"
                className={styles.profileImage}
                style={{
                  willChange: 'transform',
                  transform: `translateY(${photoHover ? '-2px' : '0px'}) rotateX(${(-0.55 * tiltX).toFixed(3)}deg) rotateY(${(-0.55 * tiltY).toFixed(3)}deg)`
                }}
              />
            </div>

            {/* Card */}
            <section ref={containerRef as React.RefObject<HTMLElement>} className={`${styles.glassmorphismCard} ${styles.tiltRoot} ${!isVisible ? styles.isInactive : ''}`} aria-label="About Mohit Manna">
              <div className={styles.sheen} aria-hidden="true" />
              <div className={styles.edgeGlow} aria-hidden="true" />
              <div className={styles.cursorLight} aria-hidden="true" />
              {/* Name + subhead — fully centered */}
              <header className={styles.cardHeader}>
                <h2 className={`${styles.nameGradient} ${styles.parallaxZ1} ${styles.stagger1}`}>Mohit Manna</h2>
                <p className={`${styles.subhead} ${styles.parallaxZ2} ${styles.stagger2}`}>
                  Computer Engineering + Math @ Purdue University
                </p>
              </header>

              <hr className={styles.sectionDivider} />

              <div className={styles.cardContent}>
                {/* Involved In */}
                <div className={`${styles.block} ${styles.stagger3}`}>
                  <span
                    ref={involvedMag.ref}
                    className={`${styles.badge} ${styles.badgePrimary} ${styles.magnetic} ${styles.parallaxZ3}`}
                    role="note"
                  >
                    Involved In
                  </span>
                  <p className={styles.blockBody}>
                    The Data Mine · Purdue Stack · Vertically Integrated Projects
                  </p>
                </div>

                {/* Focus */}
                <div className={`${styles.block} ${styles.stagger4}`}>
                  <span
                    ref={focusMag.ref}
                    className={`${styles.badge} ${styles.badgeCyan} ${styles.magnetic} ${styles.parallaxZ3}`}
                    role="note"
                  >
                    Focus
                  </span>
                  <p className={styles.blockBody}>
                    Full Stack Developer + AI Enthusiast
                  </p>
                </div>

                {/* Meta line */}
                <ul className={`${styles.metaList} ${styles.parallaxZ4} ${styles.stagger4}`} aria-label="Quick facts">
                  <li className={styles.metaItem}>✈️ Sophomore student @ Purdue University</li>
                </ul>

                {/* Footer tagline */}
                <footer className={styles.cardFooter}>
                  <p className={styles.cardDescription}>
                    Driven to engineer tech that empowers people.
                  </p>
                </footer>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
