import { useEffect, useState } from 'react';
import styles from '../App.module.css';

import FloatingNav from '../components/FloatingNav';
import LandingPage from '../components/LandingPage';
import LandingPage_Mobile from '../components/LandingPage_Mobile';
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
      {isMobile ? null : <FloatingNav />}

      <div id="Intro">
        {isMobile ? <LandingPage_Mobile /> : <LandingPage />}
      </div>
      
      <div id="Profile" className={styles['profile-section']}>
        <SectionHeader title="Profile" subtitle="A bit about who I am and what drives me" />
        <About />
      </div>

      <div id="History" className={styles['history-section']}>
        <SectionHeader title="History" subtitle="From clueless beginnings to a slightly less clueless now" />
        {isMobile ? <WorkExperience_Mobile /> : <WorkExperience />}
        {isMobile ? null : <TimelineDivider />}
        {isMobile ? <Education_Mobile /> : <Education />}
      </div>

      <div id="Skills" className={styles['skills-section']}>
        <SectionHeader title="Skills" subtitle="Tools and talents honed over time" />
        <Skills />
      </div>

      <div id="Contact" className={styles['contact-section']}>
        <SectionHeader title="Contact" subtitle="Open for ideas, questions, and collaborations" />
        <Contact />
      </div>
    </>
  )
}
