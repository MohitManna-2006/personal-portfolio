import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styles from "./Home.module.css";
import RubiksCube from "../RubiksCube";

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroSection}>
        {/* LEFT: COPY */}
        <div className={styles.content}>
          <div className={styles.greeting}>
            <span className={styles.hi}>Hi, I'm</span>
            <h1 className={styles.name}>Mohit Manna</h1>
          </div>

          <div className={styles.titleSection}>
            <h2 className={styles.title}>
              Turning ideas into fast, scalable systems
            </h2>
            <p className={styles.subtitle}>
              Computer Engineering Student @ Purdue University
            </p>
          </div>

          {/* CTAs */}
          <div className={styles.ctaButtons}>
            <a href="mailto:mohitmanna@purdue.edu" className={styles.primaryBtn}>
              <span>Contact Me</span>
              <svg className={styles.arrow} viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12h12m0 0-5-5m5 5-5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>

            <Link to="/about" className={styles.secondaryBtn}>About</Link>

            {/* Optional resume link; replace with your actual file path */}
            <a href="/resume.pdf" className={styles.ghostBtn}>
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT: CUBE (unchanged) */}
        <div className={styles.visualElement}>
          <div className={styles.cubeContainer}>
            <Suspense fallback={<div className={styles.loading}>Loading 3D Scene...</div>}>
              <Canvas
                camera={{ position: [5, 5, 5], fov: 50 }}
                className={styles.canvas}
                style={{ background: "transparent" }}
              >
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <RubiksCube />
                <OrbitControls
                  enablePan={false}
                  enableZoom={true}
                  enableRotate={true}
                  autoRotate={false}
                  minDistance={3}
                  maxDistance={10}
                />
              </Canvas>
            </Suspense>
            <div className={styles.cubeLabel}>
              <span>Building the future</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
