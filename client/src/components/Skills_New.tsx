import React from 'react';
import '../styles/skills_new.css';
// import skillsData from '../data/skillsData.ts';
import { hardSkillsData, softSkillsData, toolsData, languagesData } from '../data/skillsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

export default function SKills_New() {
  return (
    <Container className="skills-container">
        <Row className="skills-header-row">
            <Col md={4} className="skills-header-col">
                <hr className="skills-header-hr" />
            </Col>

            <Col md={4} className="skills-header-col">
                <h2 className="skills-header">Skills</h2>
            </Col>

            <Col md={4} className="skills-header-col">
                <hr className="skills-header-hr" />
            </Col>
        </Row>

        <Row className="skills-subheader-row">
            <Col md={4} className="skills-subheader-col">
                {/* Padding for either side of subheader */}
            </Col>

            <Col md={4} className="skills-subheader-col">
                <p className="skills-subheader">Some inspiring LinkedIn ass quote goes here</p>
            </Col>

            <Col md={4} className="skills-subheader-col">
                {/* Padding for either side of subheader */}
            </Col>
            <hr />
        </Row>

        <Row className="skills-holder-row">
            <Col md={5} className="skills-holder-col">
                <Row className="hard-skills-title">
                    <h4>Hard Skills</h4>
                    <hr />
                </Row>
                
                <h5>Programming</h5>
                {hardSkillsData.map((item, index) => (
                   <Row key={index} className="hard-skills-list">
                    <Col className="hard-skill-category">
                        <Row className="hard-skills">
                            <Col md={6} className="hard-skill">
                                {item.skillName}
                            </Col>
                            <Col md={6} className="stars-holder">
                                *staaars*
                            </Col>
                        </Row>
                    </Col>
                </Row> 
                ))}

                <h5>Tools</h5>
                {toolsData.map((item, index) => (
                <Row key={index} className="soft-skills-list">
                    <Col className="soft-skill-category">
                        <Row className="soft-skills">
                            <Col md={6} className="soft-skill">
                                {item.skillName}
                            </Col>
                            <Col md={6} className="stars-holder">
                                *staaars*
                            </Col>
                        </Row>
                    </Col>
                </Row>
                ))}
                
            </Col>

            <Col md={2} className="skills-divider-col">
                <div className="skills-divider"></div>
            </Col>
            
            <Col md={5} className="skills-holder-col">
                <Row className="soft-skills-title">
                    <h4>Soft Skills</h4>
                    <hr />
                </Row>

                <h5>Personal Skills</h5>
                {softSkillsData.map((item, index) => (
                <Row key={index} className="soft-skills-list">
                    <Col className="soft-skill-category">
                        <Row className="soft-skills">
                            <Col md={6} className="soft-skill">
                                {item.skillName}
                            </Col>
                            <Col md={6} className="stars-holder">
                                *staaars*
                            </Col>
                        </Row>
                    </Col>
                </Row>
                ))}

                <h5>Languages</h5>
                {languagesData.map((item, index) => (
                <Row key={index} className="soft-skills-list">
                    <Col className="soft-skill-category">
                        <Row className="soft-skills">
                            <Col md={6} className="soft-skill">
                                {item.skillName}
                            </Col>
                            <Col md={6} className="stars-holder">
                                *staaars*
                            </Col>
                        </Row>
                    </Col>
                </Row>
                ))}
   
            </Col>
        </Row>
    </Container>
  );
}