import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import '../styles/skills.module.css'; // Assuming you have a CSS file for styling

export default function Skills() {
  return (
    <Container className="skills-container">
        <Row>
            <Col>
                <h2 className="skills-header">Skills</h2>
                <p className="skills-subheader">Some inspiring LinkedIn ass quote goes here</p>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col md={6} sm={4}>
                <h4 className="skill">HTML5</h4>
                <p className="skill-description">Front-end Development</p>
                <hr />
            </Col>
            <Col md={6} sm={4}>
                <h4 className="skill">CSS3</h4>
                <p className="skill-description">Including pre-processors such as SASS</p>
                <hr />
            </Col>
            <Col md={6} sm={4}>
                <h4 className="skill">PHP</h4>
                <p className="skill-description">Back-end Devleopment</p>
                <hr />
            </Col>
            <Col md={6} sm={4}>
                <h4 className="skill">JavaScript</h4>
                <p className="skill-description">Website Interaction and Animation</p>
                <hr />
            </Col>
            <Col md={6} sm={4}>
                <h4 className="skill">React</h4>
                <p className="skill-description">Front-end interface development</p>
                <hr />
            </Col>
            <Col md={6} sm={4}>
                <h4 className="skill">Bootstrap Framework</h4>
                <p className="skill-description">HTML layout design</p>
                <hr />
            </Col>
            <Col md={6} sm={4}>
                <h4 className="skill">MySQL</h4>
                <p className="skill-description">Relational Database management</p>
                <hr />
            </Col>
            <Col md={6} sm={4}>
                <h4 className="skill">NoSQL</h4>
                <p className="skill-description">Non-relational Database management</p>
                <hr />
            </Col>
            <Col md={6} sm={4}>
                <h4 className="skill">Photoshop</h4>
                <p className="skill-description">Front-end Design Mockups</p>
                <hr />
            </Col>
            <Col md={6} sm={4}>
                <h4 className="skill">Illustrator</h4>
                <p className="skill-description">Wireframing and Interaction Design</p>
                <hr />
            </Col>
            <Col md={6} sm={4}>
                <h4 className="skill">JSON</h4>
                <p className="skill-description">NoSQL Databases, API Consumption</p>
                <hr />
            </Col>
            <Col md={6} sm={4}>
                <h4 className="skill">Interactive Graphics</h4>
                <p className="skill-description">Animation, Behaviours and Data Visualization</p>
                <hr />
            </Col>
        </Row>
    </Container>
  )
}
