import styles from '../styles/sectionHeader.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

import { fadeIn } from '../animations/variants';

type SectionHeaderProps = {
    title: string;
    subtitle: string;
    backgroundColor?: string;
}

export default function SectionHeader({ title, subtitle, backgroundColor}: SectionHeaderProps) {
  return (
    <Container style={{ backgroundColor }} className={styles['section-header-container']}>
        <Row>
            <Col md={4}>
                <hr className={styles['header-wing-left-hr']}/>
            </Col>
            <Col md={4}>
                <motion.h1
                    className={styles['section-header']}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {title}
                </motion.h1>
                <motion.p 
                    className={styles['section-subheader']}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {subtitle}
                </motion.p>
            </Col>
            <Col md={4}>
                <hr className={styles['header-wing-right-hr']}/>
            </Col>
        </Row>
    </Container>
  )
}
