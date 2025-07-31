// src/components/Landing.tsx
import styles from '../styles/landing.module.css';

export default function Landing() {
  return (
     <div className={styles.landing}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>
          <h5 className={styles.subtitle}>    *this landing page is a placeholder :P</h5><br />
          Timothy Hayes | Interactive Resume 
        </h1>  
      </div>
    </div>
  );
}