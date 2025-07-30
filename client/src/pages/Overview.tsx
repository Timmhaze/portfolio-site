import React from 'react'
import { useEffect, useState, useRef } from 'react';
import styles from '../App.module.css';

import FloatingNav from '../components/FloatingNav';
import Landing from '../components/Landing';
import SectionHeader from '../components/SectionHeader';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import WorkExperience_Mobile from '../components/WorkExperience_Mobile'; // Mobile version of WorkExperience
import TimelineDivider from '../components/TimelineDivider';
import Education from '../components/Education';
import Education_Mobile from '../components/Education_Mobile';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Overview() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        handleResize(); // Call it initially to set the correct state

        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <>
      <FloatingNav />

      <div id="Intro">
        <Landing />
      </div>
      
      <div id="Profile" className={styles['profile-section']}>
        <SectionHeader title="Profile" subtitle="Beep boop computer go brrrrrr" />
        <About />
      </div>

      <div id="History" className={styles['history-section']}>
        <SectionHeader title="History" subtitle="Beep boop computer go brrrrrr" />
        {isMobile ? <WorkExperience_Mobile /> : <WorkExperience />}
        {isMobile ? null : <TimelineDivider />}
        {isMobile ? <Education_Mobile /> : <Education />}
      </div>

      <div id="Skills" className={styles['skills-section']}>
        <SectionHeader title="Skills" subtitle="Beep boop computer go brrrrrr" />
        <Skills />
      </div>

      <div id="Contact" className={styles['contact-section']}>
        <SectionHeader title="Contact" subtitle="Beep boop computer go brrrrrr" />
        <Contact />
      </div>
    </>
  )
}
