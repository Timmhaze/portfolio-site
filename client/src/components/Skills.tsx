import React from 'react';
import styles from '../styles/skills.module.css';  // assign to a variable
import { hardSkillsData, softSkillsData, toolsData, languagesData } from '../data/skillsData';
import { Container, Row, Col } from 'react-bootstrap';

import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Skills() {

  return (
    <Container className={styles['skills-container']}>
      
      <Row className={styles['skill-list-container-row']}>
        <Col md={5} className={styles['skills-left-col']}>
          <Row className={styles['skills-title-row']}>
            <h4 className={styles['skills-title']}>Hard Skills</h4>
            <hr className={styles['skills-hr']}/>
          </Row>

          <h5 className={styles['skill-category']}>Coding</h5>
          {hardSkillsData.map((item, index) => (

          // Thing here

          <Row key={index} className={styles['skills-list-row']}>
            <Col md={6} className={styles['skill-name']}>{item.skillName}</Col>
            <Col md={6} className={styles['skill-level']}>
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={i < item.skillLevel ? faStarSolid : faStarRegular} // Solid or outline
                    color={i < item.skillLevel ? "#f7882f" : "#aaa"}
                  />
                ))}
            </Col>
          </Row>
          ))}

          <h5 className={styles['skill-category']}>Tools</h5>
          {toolsData.map((item, index) => (

          // Thing here

          <Row key={index} className={styles['skills-list-row']}>
            <Col md={6} className={styles['skill-name']}>{item.skillName}</Col>
            <Col md={6} className={styles['skill-level']}>
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={i < item.skillLevel ? faStarSolid : faStarRegular} // Solid or outline
                    color={i < item.skillLevel ? "#f7882f" : "#aaa"}
                  />
                ))}
            </Col>
          </Row>
          ))}

        </Col>

        {/*///////////////////////////////////////////// */}

        <Col md={2} className={styles['skills-divider-col']}>
          <div className={styles['skills-divider']}></div>
        </Col>

        {/*///////////////////////////////////////////// */}

        <Col md={5} className={styles['skills-right-col']}>
          <Row className={styles['skills-title-row']}>
            <h4 className={styles['skills-title']}>Soft Skills</h4>
            <hr className={styles['skills-hr']}/>
          </Row>

          <h5 className={styles['skill-category']}>Personal Skills</h5>
          {softSkillsData.map((item, index) => (

          // Thing here
          
          <Row key={index} className={styles['skills-list-row']}>
            <Col md={6} className={styles['skill-name']}>{item.skillName}</Col>
            <Col md={6} className={styles['skill-level']}>
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={i < item.skillLevel ? faStarSolid : faStarRegular} // Solid or outline
                    color={i < item.skillLevel ? "#f7882f" : "#aaa"}
                  />
                ))}
            </Col>
          </Row>
          ))}

          <h5 className={styles['skill-category']}>Languages</h5>
          {languagesData.map((item, index) => (

          // Thing here

          <Row key={index} className={styles['skills-list-row']}>
            <Col md={6} className={styles['skill-name']}>{item.skillName}</Col>
            <Col md={6} className={styles['skill-level']}>
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={i < item.skillLevel ? faStarSolid : faStarRegular} // Solid or outline
                    color={i < item.skillLevel ? "#f7882f" : "#aaa"}
                  />
                ))}
            </Col>
          </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
