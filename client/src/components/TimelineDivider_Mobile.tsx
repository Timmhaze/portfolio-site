import styles from '../styles/timelineDiv.module.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function TimelineDivider_Mobile() {
  return (
    <Container className={styles['mobile-timeline-divider-container']}>
      <Row>
        <Col md={1} sm={1} xs={1} className={styles['mobile-timeline-divider']}>
        </Col>
        <Col md={11} sm={11} xs={11} className={styles['mobile-timeline-divider-buffer']}>
        
        </Col>
      </Row>
      {/*/////////////////////////////////////////////////////////*/}
    </Container>
  )
}
