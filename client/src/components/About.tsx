import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import styles from '../styles/about.module.css';
import profile from '../assets/profile.ico';

export default function About() {
  return (
    <Container className={styles['about-container']}>
        <Row>
            <Col md={4} sm={12}>
                <h2 className={styles['about-me-header']}>About me</h2>
                <p className={styles['about-me-content']}>
                    I am a freelance Web Designer and Full Stack Developer with a practical, ordered approach to building focused and well-designed websites. 
                    My passion for interactive graphics drives me to create experiences that are not only functional but also visually engaging through thoughtful use of animation. 
                    I recently completed my degree (BSc. Hons) in Creative Computing at IADT, graduating with a 2.1. Along the way, I’ve developed a strong appreciation for clean code, 
                    intuitive UX, and the small design choices that bring a site to life. I’m always looking to grow my skills and take on projects that challenge both logic and creativity.
                </p>
            </Col>
            <Col className={styles['profile-image-col']} md={4} sm={12}>
                <img className={styles['profile-image']} src={profile} alt="thayes-image" /> 
            </Col>
            <Col md={4} sm={12}>
                <h2 className={styles['details-header']}>Details</h2>
                <p className={styles['details-subheader']}>Name:</p>
                <p className={styles['details-content']}>Timothy Hayes</p>
                <p className={styles['details-subheader']}>Date of Birth:</p>
                <p className={styles['details-content']}>20-12-1995</p>
                <p className={styles['details-subheader']}>Location:</p>
                <p className={styles['details-content']}>Prague, Czech Republic</p>
                <p className={styles['details-subheader']}>My LinkedIn:</p>
                <a href="https://www.linkedin.com/in/timothyhayes95/">
                    <p className={`${styles['details-subheader']} ${styles['linkedin-link']}`}>
                        https://www.linkedin.com/in/timothyhayes95/
                    </p>
                </a>
            </Col>
        </Row>
    </Container>
  );
}