import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, scaleUp, fadeIn } from '../animations/variants';

import styles from '../styles/about.module.css';
import profile from '../assets/profile.ico';

export default function About() {
  return (
    <Container className={styles['about-container']}>
        <Row>
            <Col md={4} sm={12}>

                <motion.h2
                    className={styles['about-me-header']}
                    variants={slideInFromLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }} // controls re-trigger behavior
                >
                About me
                </motion.h2>

                <motion.p 
                    className={styles['about-me-content']}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }} // controls re-trigger behavior
                    custom={0.2}
                >
                    I am a freelance Web Designer and Full Stack Developer with a practical, ordered approach to building focused and well-designed websites. 
                    My passion for interactive graphics drives me to create experiences that are not only functional but also visually engaging through thoughtful use of animation. 
                    I recently completed my degree (BSc. Hons) in Creative Computing at IADT, graduating with a 2.1. Along the way, I’ve developed a strong appreciation for clean code, 
                    intuitive UX, and the small design choices that bring a site to life. I’m always looking to grow my skills and take on projects that challenge both logic and creativity.
                </motion.p>
            </Col>
            <Col className={styles['profile-image-col']} md={4} sm={12}>
                <motion.img 
                    className={styles['profile-image']} src={profile} alt="thayes-image" 
                    variants={scaleUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }} // controls re-trigger behavior
                /> 
            </Col>
            <Col md={4} sm={12}>

                <motion.h2 
                    className={styles['details-header']}
                    variants={slideInFromRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }} // controls re-trigger behavior
                >
                    Details
                </motion.h2>

                <motion.p className={styles['details-subheader']}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }} // controls re-trigger behavior
                >
                    Name:
                </motion.p>
                <motion.p 
                    className={styles['details-content']}
                    variants={slideInFromRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }} // controls re-trigger behavior
                    custom={0.5}
                >
                    Timothy Hayes
                </motion.p>

                <motion.p className={styles['details-subheader']}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }} // controls re-trigger behavior
                >
                    Date of Birth:
                </motion.p>

                <motion.p 
                    className={styles['details-content']}
                    variants={slideInFromRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }} // controls re-trigger behavior
                    custom={0.5}
                >
                    20-12-1995
                </motion.p>

                <motion.p className={styles['details-subheader']}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }} // controls re-trigger behavior
                >
                    Location:
                </motion.p>

                <motion.p 
                    className={styles['details-content']}
                    variants={slideInFromRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }} // controls re-trigger behavior
                    custom={0.5}
                >
                    Prague, Czech Republic
                </motion.p>
                
                <motion.p className={styles['details-subheader']}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }} // controls re-trigger behavior
                >
                    My LinkedIn:
                </motion.p>
                <a href="https://www.linkedin.com/in/timothyhayes95/">
                    <motion.p 
                        className={`${styles['details-subheader']} ${styles['linkedin-link']}`}
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }} // controls re-trigger behavior
                        custom={0.5}
                    >
                        https://www.linkedin.com/in/timothyhayes95/
                    </motion.p>
                </a>
            </Col>
        </Row>
    </Container>
  );
}