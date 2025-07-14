import React from 'react';
import styles from '../styles/workExperience.module.css';
import experienceData from '../data/workExperienceData.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

export default function WorkExperience() {
  return (
    <Container className={styles['work-experience-container']}>

      <Row className={styles['header-row']}>
        <Col md={12} className={styles['header-col']}>
          <h2 className={styles['work-experience-header']}>Work Experience</h2>
          <hr className={styles['work-experience-header-hr']} />
        </Col>
      </Row>
      
      {/* Items on the left side */}
      {experienceData.map((item, index) => (
        <Row key={index} className={styles['work-experience-row']}>
          <Col md={5} className={styles['work-experience-left-col']}>
            {item.side === 'left' && (
              <div className={`${styles['work-experience-item']} text-end`}>
                <h5 className={styles['item-company']}>{item.company}</h5>
                <hr className={styles['item-hr-left']} />
                <p className={styles['item-title']}>
                  {item.title} | <span className={styles['item-type']}>{item.type}</span>
                </p>
                <p className={styles['item-date']}>{item.date}</p>
                <p className={styles['item-description']}>{item.description}</p>
                <p className={styles['item-location']}>
                  {item.location}
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginLeft: 10, color: "#F7882F" }} />
                </p>
              </div>
            )}
          </Col>

          {/* Vertical Timeline Line */}
          <Col md={2} className={`position-relative ${styles['work-experience-timeline-col']}`}>
            <div className={styles['timeline-line']}>
              <div className={styles['timeline-dot']}></div>
            </div>
          </Col>

          {/* Items on the right side */}
          <Col md={5} className={styles['work-experience-right-col']}>
            {item.side === 'right' && (
              <div className={`timeline-item text-start`}>
                <h5 className={styles['item-company']}>{item.company}</h5>
                <hr className={styles['item-hr-right']} />
                <p className={styles['item-title']}>
                  {item.title} | <span className={styles['item-type']}>{item.type}</span>
                </p>
                <p className={styles['item-date']}>{item.date}</p>
                <p className={styles['item-description']}>{item.description}</p>
                <p className={styles['item-location']}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 10, color: "#F7882F" }} />
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