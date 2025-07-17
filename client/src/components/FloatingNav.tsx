// components/FloatingNav.tsx
import React from 'react';
import styles from '../styles/floatingNav.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { div } from 'framer-motion/client';

import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const sections = ['Profile', 'History', 'Skills', 'Contact'];

export default function FloatingNav() {
  return (
  <Container className={styles.navContainer}>
    {sections.map((section, index) => (
    <a key={index} href={`#${section}`}>
      <Row key={index} className={styles.navRow}>
        
        <Col md={2}>
          <FontAwesomeIcon className={styles.navDot} icon={faCircle} />
        </Col>
        <Col md={10}>
          <p className={styles.navText}>{section}</p>
        </Col>
        
      </Row>
    </a>
    ))}
  </Container>
    // <nav className={styles.navContainer}>
    //   {sections.map((section, index) => (
    //     <div className={styles['nav-container']}>
    //       <a key={index} href={`#${section}`}>
    //         <div className={styles.navDot}>
    //           {section}
    //         </div>  
    //       </a>
    //     </div>
    //   ))}
    // </nav>
  );
}