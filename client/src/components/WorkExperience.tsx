import React from 'react'
import '../styles/workExperience.css'; // Assuming you have a CSS file for styling

import { Container, Row, Col, Card } from 'react-bootstrap';

export default function WorkExperience() {
  return (
    <Container className="timeline-container">
      <Row>
        <Col md={12}>
          <h2 className="timeline-title">Work Experience</h2>
        </Col>
      </Row>

{/*/////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

      <Row className="position-relative timeline-row-segment">
        {/* Left column */}
        <Col md={5} className="d-flex flex-column align-items-end justify-content-center">
          <div className="timeline-item left">
            <h5>Frontend Developer</h5>
            <p>Company A — Jan 2022 - Present</p>
            <h5>Intern</h5>
            <p>Company C — 2019</p>
          </div>
        </Col>

        {/* Center vertical line */}
        <Col md={2} className="timeline-line-col">
          <div className="timeline-line">
            <div className="timeline-dot" style={{ top: '30%' }}></div>
          </div>
        </Col>

        {/* Right column */}
        <Col md={5} className="d-flex flex-column justify-content-center">
          {/*Empty col for spacing*/}
        </Col>
      </Row>

{/*/////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

      <Row className="position-relative timeline-row-segment">
        {/* Left column */}
        <Col md={5} className="d-flex flex-column align-items-end justify-content-center">
          {/*Empty col for spacing*/}
        </Col>

        {/* Center vertical line */}
        <Col md={2} className="timeline-line-col">
          <div className="timeline-line">
            <div className="timeline-dot" style={{ top: '30%' }}></div>
          </div>
        </Col>

        {/* Right column */}
        <Col md={5} className="d-flex flex-column justify-content-center">
          <div className="timeline-item right">
            <h5>Frontend Developer</h5>
            <p>Company A — Jan 2022 - Present</p>
            <h5>Intern</h5>
            <p>Company C — 2019</p>
          </div>
        </Col>
      </Row>

{/*/////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

      <Row className="position-relative timeline-row-segment">
        {/* Left column */}
        <Col md={5} className="d-flex flex-column align-items-end justify-content-center">
          <div className="timeline-item left">
            <h5>Frontend Developer</h5>
            <p>Company A — Jan 2022 - Present</p>
            <p>Intern</p>
            <p>Company C — 2019</p>
          </div>
        </Col>

        {/* Center vertical line */}
        <Col md={2} className="timeline-line-col">
          <div className="timeline-line">
            <div className="timeline-dot" style={{ top: '30%' }}></div>
          </div>
        </Col>

        {/* Right column */}
        <Col md={5} className="d-flex flex-column justify-content-center">
          {/*Empty col for spacing*/}
        </Col>
      </Row>

{/*/////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

      <Row className="position-relative timeline-row-segment">
        {/* Left column */}
        <Col md={5} className="d-flex flex-column align-items-end justify-content-center">
         {/*Empty col for spacing*/}
        </Col>

        {/* Center vertical line */}
        <Col md={2} className="timeline-line-col">
          <div className="timeline-line">
            <div className="timeline-dot" style={{ top: '30%' }}></div>
          </div>
        </Col>

        {/* Right column */}
        <Col md={5} className="d-flex flex-column justify-content-center">
          <div className="timeline-item right">
              <h5>Frontend Developer</h5>
              <p>Company A — Jan 2022 - Present</p>
              <h5>Intern</h5>
              <p>Company C — 2019</p>
          </div>
        </Col>
      </Row>

{/*/////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
    </Container>
  )
}
