import styles from '../styles/LandingPage.module.css';
import { Container, Row, Col } from 'react-bootstrap';

import { motion } from 'framer-motion';
import { slideInFromLeft, fadeIn, slideInFromRight } from '../animations/variants';

export default function LandingPage_Mobile() {

     const defaultMotionHelper = {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: false, amount: 0.2 }
    }
  
    return (
        <Container className={styles['landing-page-mob-container']}>
            <Row className={styles['mob-main-row']}>
                <Col>
                    <Row className={styles['mob-upper-half']}>
                        <Col className={styles['mob-white-bars']}>
                            {Array.from({ length: 6 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={styles['mob-white-bar']}
                                    style={{
                                        width: `${75 - i * 8}%` // first = 100%, then 90%, 80%, etc.
                                    }}
                                    variants={slideInFromLeft}
                                    {...defaultMotionHelper}
                                    custom={i / 6}
                                ></motion.div>
                            ))}
                        </Col>
                        <motion.div className={styles['f-name-mobile']} variants={fadeIn} {...defaultMotionHelper} custom={0.75}>Timothy</motion.div>
                    </Row>
                    <Row className={styles['mob-lower-half']}>
                        <motion.div className={styles['s-name-mobile']} variants={fadeIn} {...defaultMotionHelper} custom={0.5}>Hayes</motion.div>
                        <motion.div className={styles['subtitle-mobile']} variants={fadeIn} {...defaultMotionHelper} custom={1.2}>My Interactive Resume</motion.div>
                        <Col className={styles['mob-orange-bars-lower']}>
                            {Array.from({ length: 10 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={styles['mob-orange-bar']}
                                    style={{
                                        width: `${75 - i * 8}%` // same as above
                                    }}
                                    variants={slideInFromRight}
                                    {...defaultMotionHelper}
                                    custom={i / 6}
                                ></motion.div>
                            ))}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
