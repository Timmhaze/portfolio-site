import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/contact.module.css';

export default function Contact() {
  return (
    <div className={styles['contact-section']}>
      <Container fluid>
        <Row>
          <Col className="text-center">
            <h4 className={styles.title}>Get in Touch</h4>
            <p className={styles.text}>
              Feel free to reach out via email or through any of the links below.
            </p>
            <p className={styles.email}>
              <a href="mailto:timhayes95@gmail.com">TimHayes95@Gmail.com</a>
            </p>
            <div className={styles.links}>
              <a href="https://github.com/Timmhaze" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/timothyhayes95/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
            <p className={styles.footer}>© {new Date().getFullYear()} Timothy Hayes</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}