import styles from '../styles/landingPage.module.css';
import { Container, Row, Col } from 'react-bootstrap';

import { motion } from 'framer-motion';
import { slideInFromLeft, scaleUp, fadeIn, slideInFromBottom } from '../animations/variants';

export default function LandingPage() {

    const defaultMotionHelper = {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: false, amount: 0.2 }
    }

  return (
    <Container className={styles['landing-page-container']}>
      <Row>
        <Col md={4} className={styles['left-col']}>
            {Array.from({ length: 4 }).map((_, i) => (
                <Row key={i} className={styles['row-white-bars']}>
                    <motion.div className={styles['white-bar']} variants={slideInFromLeft} {...defaultMotionHelper} custom={i / 2}></motion.div>
                </Row>
            ))}
          <div className={styles['name-container-left']}>
            <motion.span className={styles['f-name']} variants={fadeIn} {...defaultMotionHelper} custom={0.2}>Timothy</motion.span>
          </div>
        </Col>

        <Col md={4} className={styles['middle-col']}>
          <div className={styles['name-container-middle']}>
            <motion.span className={styles['s-name']} variants={fadeIn} {...defaultMotionHelper} custom={0.75}>Hayes</motion.span>
          </div>
          <Row>
            <motion.div className={styles['mid-orange-box']} variants={scaleUp} {...defaultMotionHelper} custom={0.5}></motion.div>
          </Row>
          <div className={styles['subtitle-container-middle']}>
            <motion.span className={styles['subtitle']} variants={fadeIn} {...defaultMotionHelper} custom={1}>My Interactive Resume</motion.span>
          </div>
          <Row>
            <motion.div className={styles['mid-grey-box-one']} variants={slideInFromLeft} {...defaultMotionHelper}></motion.div>
          </Row>
          <Row>
            <motion.div className={styles['mid-grey-box-two']} variants={slideInFromLeft} {...defaultMotionHelper} custom={0.35}></motion.div>
          </Row>
          <Row>
            <motion.div className={styles['mid-grey-box-three']} variants={slideInFromLeft} {...defaultMotionHelper} custom={0.7}></motion.div>
          </Row>
          
        </Col>

        <Col md={4} className={styles['right-col']}>
            {Array.from({ length: 12 }).map((_, i) => (
                <Row key={i} className={styles['row-orange-bars']}>
                    <motion.div className={styles['orange-bar']} variants={slideInFromBottom} {...defaultMotionHelper} custom={i / 7}></motion.div>
                </Row>
            ))}
        </Col>
      </Row>
    </Container>
  );
}