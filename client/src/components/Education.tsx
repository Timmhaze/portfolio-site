import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/education.module.css';

import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromBottom, slideInFromRight, scaleUp, fadeIn, fadeInHr, fadeInTimelineDot } from '../animations/variants';


import educationData from '../data/educationData.ts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


export default function Education() {

  const defaultMotionHelper = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: false, amount: 0.2 } // controls re-trigger behavior
  }

  return (
    <Container className={styles['education-container']}>

      <Row className={styles['header-row']}>
        <Col md={12} className={styles['header-col']}>
          <motion.h2 className={styles['education-header']} variants={slideInFromLeft} {...defaultMotionHelper} custom={0.2}>Education</motion.h2>
          <motion.hr className={styles['education-header-hr']} variants={fadeInHr} {...defaultMotionHelper} />
        </Col>
      </Row>

      {educationData.map((item, index) => (
        <Row key={index} className={styles['education-row']}>
          <Col md={5} className={styles['education-left-col']}>
            {item.side === 'left' && (
              <div className={`${styles['education-item']} text-end`}>
                <motion.h5 className={styles['item-institute']} variants={slideInFromLeft} {...defaultMotionHelper}>
                  {item.college}
                </motion.h5>
                <motion.hr className={styles['item-hr-left']} variants={fadeInHr} {...defaultMotionHelper} custom={0.2} />
                <motion.p className={styles['item-title']} variants={slideInFromLeft} {...defaultMotionHelper}>
                  {item.course} | <motion.span className={styles['item-type']} variants={fadeIn} {...defaultMotionHelper} custom={0.3}>{item.type}</motion.span>
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
          <Col md={2} className={`position-relative ${styles['education-timeline-col']}`}>
            <div className={styles['timeline-line']}>
              <motion.div className={styles['timeline-dot']} variants={fadeInTimelineDot} {...defaultMotionHelper}></motion.div>
            </div>
          </Col>

          <Col md={5} className={styles['education-right-col']}>
            {item.side === 'right' && (
              <div className={`${styles['education-item']} text-start`}>
                <motion.h5 className={styles['item-institute']} variants={slideInFromRight} {...defaultMotionHelper}>
                  {item.college}
                </motion.h5>
                <motion.hr className={styles['item-hr-right']} variants={fadeInHr} {...defaultMotionHelper} custom={0.2}/>
                <motion.p className={styles['item-title']} variants={slideInFromRight} {...defaultMotionHelper}>
                  {item.course} | <motion.span className={styles['item-type']} variants={fadeIn} {...defaultMotionHelper} custom={0.3}>{item.type}</motion.span>
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