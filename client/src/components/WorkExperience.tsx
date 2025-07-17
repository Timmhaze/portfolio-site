import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/workExperience.module.css';

import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromBottom, slideInFromRight, scaleUp, fadeIn, fadeInHr, fadeInTimelineDot } from '../animations/variants';


import experienceData from '../data/workExperienceData.ts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


export default function WorkExperience() {

  const defaultMotionHelper = {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: false, amount: 0.2 } // controls re-trigger behavior
  }

  return (
    <Container className={styles['work-experience-container']}>

      <Row className={styles['header-row']}>
        <Col md={12} className={styles['header-col']}>
          <motion.h2 className={styles['work-experience-header']} variants={slideInFromLeft} {...defaultMotionHelper} custom={0.2}>Work Experience</motion.h2>
          <motion.hr className={styles['work-experience-header-hr']} variants={fadeInHr} {...defaultMotionHelper}/>
        </Col>
      </Row>
      
      {/* Items on the left side */}
      {experienceData.map((item, index) => (
        <Row key={index} className={styles['work-experience-row']}>
          <Col md={5} className={styles['work-experience-left-col']}>
            {item.side === 'left' && (
              <div className={`${styles['work-experience-item']} text-end`}>
                <motion.h5 className={styles['item-company']} variants={slideInFromLeft} {...defaultMotionHelper}>
                  {item.company}
                </motion.h5>
                <motion.hr className={styles['item-hr-left']} variants={fadeInHr} {...defaultMotionHelper} custom={0.2} />
                <motion.p className={styles['item-title']} variants={slideInFromLeft} {...defaultMotionHelper}>
                  {item.title} | <motion.span className={styles['item-type']} variants={fadeIn} {...defaultMotionHelper} custom={0.3}>{item.type}</motion.span>
                </motion.p>
                <motion.p className={styles['item-date']} variants={fadeIn} {...defaultMotionHelper}>
                  {item.date}
                </motion.p>
                <motion.p className={styles['item-description']} variants={slideInFromLeft} {...defaultMotionHelper}>
                  {item.description}
                </motion.p>
                <motion.p className={styles['item-location']} variants={slideInFromBottom} {...defaultMotionHelper}>
                  {item.location}
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginLeft: 10, color: "#F7882F" }} />
                </motion.p>
              </div>
            )}
          </Col>

          {/* Vertical Timeline Line */}
          <Col md={2} className={`position-relative ${styles['work-experience-timeline-col']}`}>
            <div className={styles['timeline-line']}>
              <motion.div className={styles['timeline-dot']} variants={fadeInTimelineDot} {...defaultMotionHelper}></motion.div>
            </div>
          </Col>

          <Col md={5} className={styles['work-experience-right-col']}>
            {item.side === 'right' && (
              <div className={`${styles['work-experience-item']} text-start`}>
                <motion.h5 className={styles['item-company']} variants={slideInFromRight} {...defaultMotionHelper}>
                  {item.company}
                </motion.h5>
                <motion.hr className={styles['item-hr-right']} variants={fadeInHr} {...defaultMotionHelper} custom={0.2} />
                <motion.p className={styles['item-title']} variants={slideInFromRight} {...defaultMotionHelper}>
                  {item.title} | <motion.span className={styles['item-type']} variants={fadeIn} {...defaultMotionHelper} custom={0.3}>{item.type}</motion.span>
                </motion.p>
                <motion.p className={styles['item-date']} variants={fadeIn} {...defaultMotionHelper}>
                  {item.date}
                </motion.p>
                <motion.p className={styles['item-description']} variants={slideInFromRight} {...defaultMotionHelper}>
                  {item.description}
                </motion.p>
                <motion.p className={styles['item-location']} variants={slideInFromBottom} {...defaultMotionHelper}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 10, color: "#F7882F" }} />
                  {item.location} 
                </motion.p>
              </div>
            )}
          </Col>
        </Row>
      ))}
    </Container>
  );
}