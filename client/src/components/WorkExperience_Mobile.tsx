import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/workExperience.module.css';

import { motion } from 'framer-motion';
import { slideInFromRight, fadeIn, fadeInHr, fadeInTimelineDot } from '../animations/variants';

import experienceData from '../data/workExperienceData.ts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


export default function WorkExperience_Mobile() {

  const defaultMotionHelper = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: false, amount: 0.2 } // controls re-trigger behavior
  }

  return (
    <Container className={styles['mobile-work-experience-container']}>

      <Row className={styles['mobile-header-row']}>
        <Col md={12} className={styles['mobile-header-col']}>
          <motion.h2 className={styles['mobile-work-experience-header']} variants={fadeIn} {...defaultMotionHelper}>Work Experience</motion.h2>
        </Col>
      </Row>

    {experienceData.map((item, index) => (
      <Row key={index} className={styles['mobile-work-experience-row']}>
        <Col md={1} sm={1} xs={1} className={styles['mobile-work-experience-timeline-col']}>
            <div className={styles['mobile-timeline-line']}>
                <motion.div className={styles['mobile-timeline-dot']} variants={fadeInTimelineDot} {...defaultMotionHelper}></motion.div>
            </div>
        </Col>
        <Col md={11} sm={11} xs={11} className={styles['mobile-work-experience-col']}>
            <div className={styles['mobile-work-experience-item']}>
                <motion.h5 className={styles['mobile-item-company']} variants={slideInFromRight} {...defaultMotionHelper}>{item.company}</motion.h5>
                <motion.hr className={styles['mobile-item-hr']} variants={fadeInHr} {...defaultMotionHelper} />
                <motion.p className={styles['mobile-item-title']} variants={fadeIn} {...defaultMotionHelper}>
                    {item.title} | <span className={styles['mobile-item-type']}>{item.type}</span>
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
