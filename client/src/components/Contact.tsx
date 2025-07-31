import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/contact.module.css';

import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, fadeIn, slideInFromBottom } from '../animations/variants';


export default function Contact() {

  const defaultMotionHelper = {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: false, amount: 0.2 } // controls re-trigger behavior
  }

  return (
    <Container className={styles['contact-container']}>
      <Row>
        <Col className="text-center">
          <motion.h4 className={styles.title} variants={fadeIn} {...defaultMotionHelper}>Get in Touch</motion.h4>
          <motion.p className={styles.text} variants={slideInFromBottom} {...defaultMotionHelper} custom={0.5}>
            Feel free to reach out via email or through any of the links below.
          </motion.p>
          <motion.p className={styles.email} variants={slideInFromBottom} {...defaultMotionHelper} custom={1}>
            <a href="mailto:timhayes95@gmail.com">TimHayes95@Gmail.com</a>
          </motion.p>
          <div className={styles.links}>
            <motion.a href="https://github.com/Timmhaze" target="_blank" rel="noreferrer" variants={slideInFromLeft} {...defaultMotionHelper} custom={1.2}>
              GitHub
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/timothyhayes95/" target="_blank" rel="noreferrer" variants={slideInFromRight} {...defaultMotionHelper} custom={1.2}>
              LinkedIn
            </motion.a>
          </div>
          <motion.p className={styles.footer} variants={fadeIn} {...defaultMotionHelper} custom={1.5}>© {new Date().getFullYear()} Timothy Hayes</motion.p>
        </Col>
      </Row>
    </Container>
  );
}