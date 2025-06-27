import React from 'react';
import '../styles/workExperience.css';
import experienceData from '../data/workExperienceData.ts';
import { Container, Row, Col } from 'react-bootstrap';

export default function WorkExperience() {
  return (
    <Container className="work-experience-container">

      <Row className="work-experience-header-row">
        <Col md={12}>
          <h2 className="work-experience-header">Work Experience</h2>
          <hr />
        </Col>
      </Row>

      {experienceData.map((item, index) => (
        <Row key={index} className="work-experience-row">
          {/* Left Column */}
          <Col md={5} className="work-experience-timeline-col">
            {item.side === 'left' && (
              <div className="work-experience-item text-end">
                <h5 className="work-experience-item-title">{item.title}</h5>
                <hr className="work-experience-item-hr-left" />
                <p className="work-experience-item-date">{item.date}</p>
                <p className="work-experience-item-company">{item.company}</p>
                <p className="work-experience-item-description">{item.description}</p>
              </div>
            )}
          </Col>

          {/* Vertical Timeline Line */}
          <Col md={2} className="position-relative work-experience-timeline-col">
            <div className="work-experience-timeline-line">
              <div className="work-experience-timeline-dot"></div>
            </div>
          </Col>

          {/* Right Column */}
          <Col md={5} className="work-experience-timeline-col">
            {item.side === 'right' && (
              <div className="timeline-item text-start">
                <h5 className="work-experience-item-title">{item.title}</h5>
                <hr className="work-experience-item-hr-right" />
                <p className="work-experience-item-date">{item.date}</p>
                <p className="work-experience-item-company">{item.company}</p>
                <p className="work-experience-item-descriptions">{item.description}</p>
              </div>
            )}
          </Col> 
        </Row>
      ))}
    </Container>
  );
}