import styles from '../styles/timelineDiv.module.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function TimelineDivider() {
  return (
    <Container className={styles['timeline-divider-container']}>
      <Row>
        <Col md={5} className={styles['timeline-divider-col']}>
          <div className={`timeline-divider-item text-end ${styles['timeline-divider-item']}`}>
            {/* ************** */}
          </div>
        </Col>

        <Col md={2} className={`position-relative ${styles['timeline-divider-col-dashed']}`}>
          <div className={styles['timeline-divider-line-dashed']}>
            <div className={styles['timeline-divider-dot']}></div>
          </div>
        </Col>

        <Col md={5} className={styles['timeline-divider-col']}>
          <div className={`timeline-divider-item text-start ${styles['timeline-divider-item']}`}>
            {/* ************** */}
          </div>
        </Col>
      </Row>

      {/*/////////////////////////////////////////////////////////*/}
    </Container>
  );
}