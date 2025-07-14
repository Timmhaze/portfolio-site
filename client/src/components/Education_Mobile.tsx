import React from 'react'

import styles from '../styles/education.module.css';

import educationData from '../data/educationData.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

export default function Education_Mobile() {
  return (
    <Container className={styles['mobile-education-container']}>

      <Row className={styles['mobile-header-row']}>
        <Col md={12} className={styles['mobile-header-col']}>
          <h2 className={styles['mobile-education-header']}>Education</h2>
        </Col>
      </Row>

    {educationData.map((item, index) => (
      <Row key={index} className={styles['mobile-education-row']}>
        <Col md={1} sm={1} xs={1} className={styles['mobile-education-timeline-col']}>
            <div className={styles['mobile-timeline-line']}>
                <div className={styles['mobile-timeline-dot']}></div>
            </div>
        </Col>
        <Col md={11} sm={11} xs={11} className={styles['mobile-education-col']}>
            <div className={styles['mobile-education-item']}>
                <h5 className={styles['mobile-item-company']}>{item.college}</h5>
                <hr className={styles['mobile-item-hr']} />
                <p className={styles['mobile-item-title']}>
                    {item.course} | <span className={styles['mobile-item-type']}>{item.type}</span>
                </p>
                <p className={styles['mobile-item-date']}>{item.date}</p>
                <p className={styles['mobile-item-description']}>{item.description}</p>
                <p className={styles['mobile-item-location']}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 10, color: "#F7882F" }} />
                    {item.location}
                </p>
            </div>
        </Col>
      </Row>
    ))}
    </Container>
  );
}
