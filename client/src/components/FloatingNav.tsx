import React, { useEffect, useState } from 'react';
import styles from '../styles/FloatingNav.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { fadeIn, slideInFromRight } from '../animations/variants';

import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const sections = ['Intro', 'Profile', 'History', 'Skills', 'Contact'];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    function onScroll() {
      // Find the section closest to the top (within some offset)
      let currentSection = sections[0];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.2) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // check on mount

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const defaultMotionHelper = {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <Container className={styles.navContainer}>
      {sections.map((section, index) => (
        <a key={index} href={`#${section}`}>
          <Row className={styles.navRow}>
            <Col className={styles['nav-dots-col']} md={2}>
              <motion.div variants={fadeIn} {...defaultMotionHelper} custom={0.3 * index}>
                <FontAwesomeIcon
                  className={`${styles.navDot} ${
                    activeSection === section ? styles.activeDot : ''
                  }`}
                  icon={faCircle}
                />
              </motion.div>
            </Col>
            <Col className={styles['nav-text-col']} md={2}>
              <motion.div variants={slideInFromRight} {...defaultMotionHelper} custom={0.3 * index}>
                <p
                  className={`${styles.navText} ${
                    activeSection === section ? styles.activeText : ''
                  }`}
                >
                  {section}
                </p>
              </motion.div>
            </Col>
          </Row>
        </a>
      ))}
    </Container>
  );
}
