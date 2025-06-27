import React from 'react';
import '../styles/education.css';
import educationData from '../data/educationData.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

export default function Education() {
  return (
    <Container className="education-container">

      <Row className="education-header-row">
        <Col md={12} className="education-header-col">
          <h2 className="education-header">Education</h2>
          <hr className="education-header-hr" />
        </Col>
      </Row>

      {educationData.map((item, index) => (
        <Row key={index} className="education-row">
          {/* Left Column */}
          <Col md={5} className="education-timeline-col">
            {item.side === 'left' && (
              <div className="education-item text-end">
                <h5 className="education-item-title">{item.college}</h5>
                <hr className="education-item-hr-left" />
                <p className="education-item-date">{item.date}</p>
                <p className="education-item-course">{item.course}</p>
                <p className="education-item-description">{item.description}</p>
                <p className="work-experience-item-location">
                  {item.location}
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginLeft: 5, color: "#F7882F" }} />
                </p>
              </div>
            )}
          </Col>

          {/* Vertical Timeline Line */}
          <Col md={2} className="position-relative education-timeline-col">
            <div className="education-timeline-line">
              <div className="education-timeline-dot"></div>
            </div>
          </Col>

          {/* Right Column */}
          <Col md={5} className="education-timeline-col">
            {item.side === 'right' && (
              <div className="timeline-item text-start">
                <h5 className="education-item-title">{item.college}</h5>
                <hr className="education-item-hr-right" />
                <p className="education-item-date">{item.date}</p>
                <p className="education-item-course">{item.course}</p>
                <p className="education-item-description">{item.description}</p>
                <p className="work-experience-item-location">
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