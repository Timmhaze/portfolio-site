import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import '../styles/contact.css'; // Assuming you have a CSS file for styling

export default function Contact() {
  return (
    <Container fluid className="contact-container">
      <Row>
        <Col>
          <h1 className="contact-header">Contact</h1>
          <p className="contact-subheader">Dox incoming lmao</p>
          <hr />
          <Row>
            <Col md={6} sm={12}>
              <a className="linkedin-link" href="https://www.linkedin.com/in/timothyhayes95/">
                <i className="fa fa-linkedin-square"></i> https://www.linkedin.com/in/timothyhayes95/ 
              </a>
            </Col>
            <Col md={6} sm={12}>
              <a className="email-link" href="mailto:TimHayes95@Gmail.com">
                <i className="fa fa-at"></i> TimHayes95@Gmail.com
              </a>
            </Col>
          </Row>
          <hr />
        </Col>
      </Row>
    </Container>
  )
}
