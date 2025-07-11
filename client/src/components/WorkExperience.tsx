import React from 'react';
import styles from '../styles/workExperience.module.css';
import experienceData from '../data/workExperienceData.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

export default function WorkExperience() {
  return (
    <Container className={styles['work-experience-container']}>

      <Row className={styles['work-experience-header-row']}>
        <Col md={12} className={styles['work-experience-header-col']}>
          <h2 className={styles['work-experience-header']}>Work Experience</h2>
          <hr className={styles['work-experience-header-hr']} />
        </Col>
      </Row>
      
      {experienceData.map((item, index) => (
        <Row key={index} className={styles['work-experience-row']}>
          {/* Left Column */}
          <Col md={5} className={styles['work-experience-timeline-col']}>
            {item.side === 'left' && (
              <div className={`${styles['work-experience-item']} text-end`}>
                <h5 className={styles['work-experience-item-company']}>{item.company}</h5>
                <hr className={styles['work-experience-item-hr-left']} />
                <p className={styles['work-experience-item-title']}>{item.title}</p>
                <p className={styles['work-experience-item-date']}>{item.date}</p>
                <p className={styles['work-experience-item-description']}>{item.description}</p>
                <p className={styles['work-experience-item-location']}>
                  {item.location}
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginLeft: 5, color: "#F7882F" }} />
                </p>
              </div>
            )}
          </Col>

          {/* Vertical Timeline Line */}
          <Col md={2} className={`position-relative ${styles['work-experience-timeline-col']}`}>
            <div className={styles['work-experience-timeline-line']}>
              <div className={styles['work-experience-timeline-dot']}></div>
            </div>
          </Col>

          {/* Right Column */}
          <Col md={5} className={styles['work-experience-timeline-col']}>
            {item.side === 'right' && (
              <div className={`timeline-item text-start`}>
                <h5 className={styles['work-experience-item-company']}>{item.company}</h5>
                <hr className={styles['work-experience-item-hr-right']} />
                <p className={styles['work-experience-item-title']}>{item.title}</p>
                <p className={styles['work-experience-item-date']}>{item.date}</p>
                <p className={styles['work-experience-item-descriptions']}>{item.description}</p>
                <p className={styles['work-experience-item-location']}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 5, color: "#F7882F" }} />
                  {item.location}
                </p>
              </div>
            )}
          </Col> 
        </Row>
      ))}
    </Container>
  );
}