import React from 'react'

import styles from '../styles/sectionHeader.module.css';
import { Container, Row, Col } from 'react-bootstrap';

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
                <h1 className={styles['section-header']}>{title}</h1>
                <p className={styles['section-subheader']}>{subtitle}</p>
            </Col>
            <Col md={4}>
                <hr className={styles['header-wing-hr']}/>
            </Col>
        </Row>
        {/* <hr className={styles['section-header-hr']}/> */}
    </Container>
  )
}
