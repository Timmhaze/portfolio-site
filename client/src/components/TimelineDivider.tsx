import React from 'react';
import '../styles/timelineDiv.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function TimelineDivider() {
  return (
    <Container className="timeline-divider-container">
      <Row>
        <Col md={5} className="timeline-divider-col">
          <div className="timeline-divider-item text-end">
            {/* ************** */}
          </div>
        </Col>

        <Col md={2} className="position-relative timeline-divider-col-dashed">
          <div className="timeline-divider-line-dashed">
            <div className="timeline-divider-dot"></div>
          </div>
        </Col>

        <Col md={5} className="timeline-divider-col">
          <div className="timeline-divider-item text-start">
            {/* ************** */}
          </div>
        </Col>
      </Row>

      {/*/////////////////////////////////////////////////////////*/}
    </Container>
  );
}