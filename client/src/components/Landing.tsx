// src/components/Landing.tsx
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styles from '../styles/landing.module.css';

export default function Landing() {
  return (
     <div className={styles.landing}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
      </div>
    </div>
  );
}