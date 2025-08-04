// src/components/Landing.tsx
import styles from '../styles/landing.module.css';

export default function Landing() {
  return (
     <div className={styles.landing}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>
          Timothy Hayes | Interactive Resume 
        </h1>  
      </div>
    </div>
  );
}