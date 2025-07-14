import React from 'react';
import styles from '../styles/education.module.css';
import educationData from '../data/educationData.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

export default function Education() {
  return (
    <Container className={styles['education-container']}>

      <Row className={styles['header-row']}>
        <Col md={12} className={styles['header-col']}>
          <h2 className={styles['education-header']}>Education</h2>
          <hr className={styles['education-header-hr']} />
        </Col>
      </Row>

      {educationData.map((item, index) => (
        <Row key={index} className={styles['education-row']}>
          {/* Left Column */}
          <Col md={5} className={styles['education-left-col']}>
            {item.side === 'left' && (
              <div className={`${styles['education-item']} text-end`}>
                <h5 className={styles['item-institute']}>{item.college}</h5>
                <hr className={styles['item-hr-left']} />
                <p className={styles['item-course']}>
                  {item.course} | <span className={styles['item-type']}>{item.type}</span>
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
          <Col md={2} className={`position-relative ${styles['education-timeline-col']}`}>
            <div className={styles['timeline-line']}>
              <div className={styles['timeline-dot']}></div>
            </div>
          </Col>

          {/* Right Column */}
          <Col md={5} className={styles['education-right-col']}>
            {item.side === 'right' && (
              <div className={`timeline-item text-start`}>
                <h5 className={styles['item-institute']}>{item.college}</h5>
                <hr className={styles['item-hr-right']} />
                <p className={styles['item-course']}>
                  {item.course} | <span className={styles['item-type']}>{item.type}</span>
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