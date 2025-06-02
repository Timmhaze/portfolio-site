import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb, faCircle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import '../styles/experience.css'; // Assuming you have a CSS file for styling

export default function Experience() {
  return (
    <Container className="experience-container">
        <Row>
            <Col>
                <h1 className="experience-header">Experience</h1>
                <p className="experience-subheader">We should update this to one of those timeline things people are using</p>
                <hr />
            </Col> 
        </Row>
        <Row>
            <Col> 
                <h2 className="education-header">Education</h2>
            </Col>
        </Row>
        <Row>
            <Col>
                <p className="college-title"><FontAwesomeIcon className="college-title-bullet" icon={faCircle} style={{ marginRight: 15, fontSize: '0.65rem' }} />Institute of Art, Design and Technology</p>
                <p className="course-title">Creative Computing</p>
                <p className="course-duration">2017 - 2020</p>
            </Col>
            <Col>
                <p>
                    My time in IADT covered a large array of different topics, though Web Development was the core of the experience. In this course I also learned a large
                    amount about Object Oriented Programming, Data Visualization, Agile Development, User Experience, User Interface Design and User Testing.  
                </p>
                <div className="education-location">
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 5 }} />
                  Dún Laoghaire, Dublin
                </div>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                <p className="college-title"><FontAwesomeIcon className="college-title-bullet" icon={faCircle} style={{ marginRight: 15, fontSize: '0.65rem' }} />Blackrock Institute of Further Education</p>
                <p className="course-title">Creative Multimedia</p>
                <p className="course-duration">2016 - 2017</p>
            </Col>
            <Col>
                <p>
                  Creative Multimedia had a large impact on the foundation of my skills. Detailed techniques and skills used in Photoshop and Illustrator acted as the core of this course along with
                  the fundamentals of JavaScript, JQuery and Database Management. At the end of this course I also partook in a Java crash course which led to my admission to IADT.
                </p>
                <div className="education-location">
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 5 }} />
                  Blackrock, Dublin
                </div>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                <p className="college-title"><FontAwesomeIcon className="college-title-bullet" icon={faCircle} style={{ marginRight: 15, fontSize: '0.65rem' }} />Blackrock Institute of Further Education</p>
                <p className="course-title">Games Design and Development</p>
                <p className="course-duration">2015 - 2016</p>
            </Col>
            <Col>
                <p>
                  My original passion, Game Design, offered me the opportunity to work with tools such as the Unity Game Engine, learn the basics of Photoshop and supplied work experience
                  wherein I studied briefly under a freelance Animator. This course also delved into coding using C#, as it was primarily used in Unity.
                </p>
                <div className="education-location">
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 5 }} />
                  Blackrock, Dublin
                </div>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                <p className="college-title"><FontAwesomeIcon className="college-title-bullet" icon={faCircle} style={{ marginRight: 15, fontSize: '0.65rem' }} />Newpark Comprehensive</p>
                <p className="course-title">Secondary School</p>
                <p className="course-duration">2008 - 2014</p>
            </Col>
            <Col>
                <p>
                  I graduated Secondary School, where I enjoyed Biology, Maths, Engineering and Geography. Around my third year of school is when I became acquainted with PC Gaming which
                  offered me an insight into the world of Computers, how games are developed and Computer Hardware.
                </p>
                <div className="education-location">
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: 5 }} />
                  Dún Laoghaire, Dublin
                </div>
                <hr />
            </Col>
        </Row>
    </Container>
  )
}
