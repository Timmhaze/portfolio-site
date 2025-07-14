//import './App.css';
import { useEffect, useState, useRef } from 'react';
import { usePageScroller } from '@furman1331/page-scroller';

import SectionHeader from './components/SectionHeader';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import WorkExperience_Mobile from './components/WorkExperience_Mobile'; // Mobile version of WorkExperience
import TimelineDivider from './components/TimelineDivider';
import Education from './components/Education';
import Education_Mobile from './components/Education_Mobile';
import Skills from './components/Skills';
import Contact from './components/Contact';



function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize(); // Call it initially to set the correct state

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // const { initPageScroller } = usePageScroller();
  // const isInitialized = useRef(false);

  //  Because this is a dev environment (<Strict> tags in main.tsx), the 
  //  component is mounted twice to help find accidentally impure code. 
  //  this just checks if the isInitialized ref is false or true to prevent errors due to this behaviour.

  // useEffect(() => {
  //   if (!isInitialized.current) {
  //      usePageScroller({ isAllowToScrollThroughSlides: true }).initPageScroller('#scroll-body');
  //      isInitialized.current = true;
  //   }
  // }, [initPageScroller]);

  return (
    //   <div id="scroll-body">
    //     <section className="page-scroller__section">
    //       <About />
    //     </section>

    //     <section className="page-scroller__section">
    //       <WorkExperience />
    //       <TimelineDivider />
    //     </section>

    //     <section className="page-scroller__section">
    //       <Education />
    //     </section>

    //     <section className="page-scroller__section">
    //       <Experience />
    //     </section>

    //     <section className="page-scroller__section">
    //       <Skills />
    //     </section>

    //     <section className="page-scroller__section">
    //       <Contact />
    //     </section>
    // </div>

  <div>
    <SectionHeader 
      title = "Profile"
      subtitle = "Beep boop computer go brrrrrr"
    />
    <About />
    <SectionHeader 
      title = "History"
      subtitle = "Beep boop computer go brrrrrr"
    />
    {isMobile ? <WorkExperience_Mobile /> : <WorkExperience />}

    <TimelineDivider />
    
    {isMobile ? <Education_Mobile /> : <Education />}
    <SectionHeader 
      title = "Skills"
      subtitle = "Beep boop computer go brrrrrr"
    />
    <Skills />
    <SectionHeader 
      title = "Contact"
      subtitle = "Beep boop computer go brrrrrr"
    />
    <Contact />
  </div>
  );
}

export default App;