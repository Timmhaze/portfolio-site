import { Row, Col, Container } from 'react-bootstrap';

import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, scaleUp, fadeIn } from '../animations/variants';

/* ROUTE-LINK TO PORTFOLIO PAGE */
// import { Link } from 'react-router-dom';

import styles from '../styles/about.module.css';
import profile from '../assets/profile.ico';

export default function About() {

    const defaultMotionHelper = {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: false, amount: 0.2 }
    }

  return (
    <Container className={styles['about-container']}>
        <Row>
            <Col lg={4} md={12} sm={12}>
                <motion.h2 className={styles['about-me-header']} variants={slideInFromLeft} {...defaultMotionHelper}>
                    About me
                    <hr className={styles["details-hr"]}/>
                </motion.h2>
                <motion.p className={styles['about-me-content']} variants={fadeIn} {...defaultMotionHelper} custom={0.2}>
                    I’m a freelance Web Designer and Full Stack Developer with a practical, detail-focused approach to crafting clean, well-designed websites.
                    Over the years, I’ve built up a solid skill set across both front-end and back-end technologies, and I’m especially passionate about interactive 
                    graphics and animation that bring interfaces to life.
                    I care deeply about clean, readable code and intuitive UX. I focus on thoughtful design that makes a site feel effortless to use.
                    When I’m not coding, I enjoy experimenting with new ideas, learning tools that push creative boundaries, and fine-tuning the small details that make a big difference.
                </motion.p>
                <hr className={styles["details-hr"]}/>
            </Col>
            <Col className={styles['profile-image-col']} lg={4} md={12} sm={12}>
                <motion.img className={styles['profile-image']} src={profile} alt="thayes-image" variants={scaleUp} {...defaultMotionHelper}/> 
            </Col>
            <Col lg={4} md={12} sm={12}>
                <motion.h2 className={styles['details-header']} variants={slideInFromRight} {...defaultMotionHelper}>
                    Details
                    <hr className={styles["details-hr"]}/>
                </motion.h2>
                <motion.p className={styles['details-subheader']} variants={fadeIn} {...defaultMotionHelper}>Name:</motion.p>
                <motion.p className={styles['details-content']} variants={slideInFromRight} {...defaultMotionHelper} custom={0.5}>Timothy Hayes</motion.p>
                <motion.p className={styles['details-subheader']} variants={fadeIn} {...defaultMotionHelper}>Age:</motion.p>
                <motion.p className={styles['details-content']} variants={slideInFromRight} {...defaultMotionHelper} custom={0.5}>29 Years Old</motion.p>
                <motion.p className={styles['details-subheader']}variants={fadeIn} {...defaultMotionHelper}>Location:</motion.p>
                <motion.p className={styles['details-content']} variants={slideInFromRight} {...defaultMotionHelper} custom={0.5}>Bojanovice, Czech Republic</motion.p>
                <motion.p className={styles['details-subheader']} variants={fadeIn} {...defaultMotionHelper}>My LinkedIn:</motion.p>
                <a href="https://www.linkedin.com/in/timothyhayes95/">
                    <motion.p className={`${styles['details-subheader']} ${styles['linkedin-link']}`} variants={fadeIn} {...defaultMotionHelper} custom={0.5}>
                        https://www.linkedin.com/in/timothyhayes95/
                    </motion.p>
                </a>
                {/* <Link to="/portfolio">See my work</Link> */}
            </Col>
        </Row>
    </Container>
  );
}