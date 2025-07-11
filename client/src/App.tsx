//import './App.css';
import { useEffect, useRef } from 'react';
import { usePageScroller } from '@furman1331/page-scroller';

import SectionHeader from './components/SectionHeader';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
//import Experience from './components/ExperienceOLD';
import Skills from './components/Skills';
// import Skills from './components/SkillsOLD';
import Contact from './components/Contact';
import Education from './components/Education';
import TimelineDivider from './components/TimelineDivider';

function App() {
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
    <WorkExperience />
    <TimelineDivider />
    <Education />
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