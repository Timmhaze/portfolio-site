import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/skills.module.css';  // assign to a variable

import { motion } from 'framer-motion';
import { slideInFromLeft, fadeInStaggered, slideInFromTop } from '../animations/variants';

import { hardSkillsData, softSkillsData, toolsData, languagesData } from '../data/skillsData';

import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Skills() {

  const defaultMotionHelper = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: false, amount: 0.2 }
  }

  return (
    <Container className={styles['skills-container']}>
      
      <Row className={styles['skill-list-container-row']}>
        <Col md={5} className={styles['skills-left-col']}>
          <Row className={styles['skills-title-row']}>
            <motion.h4 className={styles['skills-title']} variants={slideInFromTop} {...defaultMotionHelper}>Hard Skills</motion.h4>
            <hr className={styles['skills-hr']}/>
          </Row>

          <motion.h5 className={styles['skill-category']} variants={slideInFromLeft} {...defaultMotionHelper} custom={0.4}>
            Coding
            <hr className={styles['category-hr']} />
          </motion.h5>

          {hardSkillsData.map((item, index) => (
            <Row key={index} className={styles['skills-list-row']}>
              <Col md={6} sm={6} xs={6}>
                <motion.p className={styles['skill']} key={index} variants={fadeInStaggered} {...defaultMotionHelper} custom={index}>
                  {item.skillName}
                </motion.p>
              </Col>
              <Col className={styles['skill-level-col']} md={6} sm={6} xs={6}>
                {[...Array(5)].map((_, i) => (
                  <motion.span className={styles['skill-level']} key={i} variants={fadeInStaggered} {...defaultMotionHelper} custom={index}>
                    <FontAwesomeIcon
                      icon={i < item.skillLevel ? faStarSolid : faStarRegular}
                      color={i < item.skillLevel ? "#f7882f" : "#aaa"}
                    />
                  </motion.span>
                ))}
              </Col>
              <Col className={styles['skill-description-col']}>
                <p className={styles['skill-description']}>{item.skillDescription}</p>
              </Col>
            </Row>
          ))}

          <motion.h5 className={styles['skill-category']} variants={slideInFromLeft} {...defaultMotionHelper} custom={0.4}>
            Tools
            <hr className={styles['category-hr']} />
          </motion.h5>
          {toolsData.map((item, index) => (
            <Row key={index} className={styles['skills-list-row']}>
              <Col md={6} sm={6} xs={6}>
                <motion.p className={styles['skill']} key={index} variants={fadeInStaggered} {...defaultMotionHelper} custom={index}>
                  {item.skillName}
                </motion.p>
              </Col>
              <Col className={styles['skill-level-col']} md={6} sm={6} xs={6}>
                {[...Array(5)].map((_, i) => (
                  <motion.span className={styles['skill-level']} key={i} variants={fadeInStaggered} {...defaultMotionHelper} custom={index}>
                    <FontAwesomeIcon
                      icon={i < item.skillLevel ? faStarSolid : faStarRegular}
                      color={i < item.skillLevel ? "#f7882f" : "#aaa"}
                    />
                  </motion.span>
                ))}
              </Col>
              <Col className={styles['skill-description-col']}>
                <p className={styles['skill-description']}>{item.skillDescription}</p>
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
            <motion.h4 className={styles['skills-title']} variants={slideInFromTop} {...defaultMotionHelper}>Soft Skills</motion.h4>
            <hr className={styles['skills-hr']}/>
          </Row>

          <motion.h5 className={styles['skill-category']} variants={slideInFromLeft} {...defaultMotionHelper} custom={0.4}>
            Personal Skills
            <hr className={styles['category-hr']} />
          </motion.h5>
          {softSkillsData.map((item, index) => (
            <Row key={index} className={styles['skills-list-row']}>
              <Col md={6} sm={6} xs={6}>
                <motion.p className={styles['skill']} key={index} variants={fadeInStaggered} {...defaultMotionHelper} custom={index}>
                  {item.skillName}
                </motion.p>
              </Col>
              <Col className={styles['skill-level-col']} md={6} sm={6} xs={6}>
                {[...Array(5)].map((_, i) => (
                  <motion.span className={styles['skill-level']} key={i} variants={fadeInStaggered} {...defaultMotionHelper} custom={index}>
                    <FontAwesomeIcon
                      icon={i < item.skillLevel ? faStarSolid : faStarRegular}
                      color={i < item.skillLevel ? "#f7882f" : "#aaa"}
                    />
                  </motion.span>
                ))}
              </Col>
              <Col className={styles['skill-description-col']}>
                <p className={styles['skill-description']}>{item.skillDescription}</p>
              </Col>
            </Row>
          ))}

          <motion.h5 className={styles['skill-category']} variants={slideInFromLeft} {...defaultMotionHelper} custom={0.4}>
            Languages
            <hr className={styles['category-hr']} />
          </motion.h5>
          {languagesData.map((item, index) => (
            <Row key={index} className={styles['skills-list-row']}>
              <Col md={6} sm={6} xs={6}>
                <motion.p className={styles['skill']} key={index} variants={fadeInStaggered} {...defaultMotionHelper} custom={index}>
                  {item.skillName}
                </motion.p>
              </Col>
              <Col className={styles['skill-level-col']} md={6} sm={6} xs={6}>
                {[...Array(5)].map((_, i) => (
                  <motion.span className={styles['skill-level']} key={i} variants={fadeInStaggered} {...defaultMotionHelper} custom={index}>
                    <FontAwesomeIcon
                      icon={i < item.skillLevel ? faStarSolid : faStarRegular}
                      color={i < item.skillLevel ? "#f7882f" : "#aaa"}
                    />
                  </motion.span>
                ))}
              </Col>
              <Col className={styles['skill-description-col']}>
                <p className={styles['skill-description']}>{item.skillDescription}</p>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
