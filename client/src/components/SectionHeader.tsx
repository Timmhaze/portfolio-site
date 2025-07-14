import React from 'react'

import styles from '../styles/sectionHeader.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

import { slideInFromTop, fadeIn } from '../animations/variants';

type SectionHeaderProps = {
    title: string;
    subtitle: string;
    backgroundColor?: string; // Optional prop for background color
}

export default function SectionHeader({ title, subtitle, backgroundColor}: SectionHeaderProps) {
  return (
    <Container style={{ backgroundColor }} className={styles['section-header-container']}>
        <Row>
            <Col md={4}>
                <hr className={styles['header-wing-hr']}/>
            </Col>
            <Col md={4}>

                <motion.h1
                    className={styles['section-header']}
                    variants={slideInFromTop}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }} // controls re-trigger behavior
                >
                    {title}
                </motion.h1>

                <motion.p 
                    className={styles['section-subheader']}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }} // controls re-trigger behavior
                >
                    {subtitle}
                </motion.p>
            </Col>
            <Col md={4}>
                <hr className={styles['header-wing-hr']}/>
            </Col>
        </Row>
        {/* <hr className={styles['section-header-hr']}/> */}
    </Container>
  )
}
