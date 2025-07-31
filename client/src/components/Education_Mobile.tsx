import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/education.module.css';

import { motion } from 'framer-motion';
import { slideInFromRight, fadeIn, fadeInHr, fadeInTimelineDot } from '../animations/variants';

import educationData from '../data/educationData.ts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


export default function Education_Mobile() {

  const defaultMotionHelper = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: false, amount: 0.2 } // controls re-trigger behavior
  }

  return (
    <Container className={styles['mobile-education-container']}>

      <Row className={styles['mobile-header-row']}>
        <Col md={12} className={styles['mobile-header-col']}>
          <motion.h2 className={styles['mobile-education-header']} variants={fadeIn} {...defaultMotionHelper}>Work Experience</motion.h2>
        </Col>
      </Row>

    {educationData.map((item, index) => (
      <Row key={index} className={styles['mobile-education-row']}>
        <Col md={1} sm={1} xs={1} className={styles['mobile-education-timeline-col']}>
            <div className={styles['mobile-timeline-line']}>
                <motion.div className={styles['mobile-timeline-dot']} variants={fadeInTimelineDot} {...defaultMotionHelper}></motion.div>
            </div>
        </Col>
        <Col md={11} sm={11} xs={11} className={styles['mobile-education-col']}>
            <div className={styles['mobile-work-education-item']}>
                <motion.h5 className={styles['mobile-item-institute']} variants={slideInFromRight} {...defaultMotionHelper}>{item.college}</motion.h5>
                <motion.hr className={styles['mobile-item-hr']} variants={fadeInHr} {...defaultMotionHelper} />
                <motion.p className={styles['mobile-item-title']} variants={fadeIn} {...defaultMotionHelper}>
                    {item.course} | <span className={styles['mobile-item-type']}>{item.type}</span>
                </motion.p>
                <motion.p className={styles['mobile-item-date']} variants={fadeIn} {...defaultMotionHelper}>{item.date}</motion.p>
                <motion.p className={styles['mobile-item-description']} variants={fadeIn} {...defaultMotionHelper}>{item.description}</motion.p>
                <motion.p className={styles['mobile-item-location']} variants={fadeIn} {...defaultMotionHelper}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 10, color: "#F7882F" }} />
                    {item.location}
                </motion.p>
            </div>
        </Col>
      </Row>
    ))}
    </Container>
  );
}
