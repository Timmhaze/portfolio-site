// components/FloatingNav.tsx
import React from 'react';
import styles from '../styles/floatingNav.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { div } from 'framer-motion/client';

import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, scaleUp, fadeIn } from '../animations/variants';


import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const sections = ['Intro', 'Profile', 'History', 'Skills', 'Contact'];

export default function FloatingNav() {

  const defaultMotionHelper = {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true, amount: 0.2 } // controls re-trigger behavior
  }

  return (
  <Container className={styles.navContainer}>

    {sections.map((section, index) => (
    <a key={index} href={`#${section}`}>
      <Row key={index} className={styles.navRow}>
        <Col className={styles['nav-dots-col']} md={2}>
          <motion.div variants={fadeIn} {...defaultMotionHelper} custom={0.3 * index}>
            <FontAwesomeIcon className={styles.navDot} icon={faCircle} />
          </motion.div>
        </Col>
        <Col className={styles['nav-text-col']} md={2}>
        <motion.div variants={slideInFromRight} {...defaultMotionHelper} custom={0.3 * index}>
            <p className={styles.navText}>{section}</p>
          </motion.div>
        </Col>
      </Row>
    </a>
    ))}
  </Container>
  );
}