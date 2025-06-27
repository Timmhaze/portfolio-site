//import './App.css';
import { useEffect, useRef } from 'react';
import { usePageScroller } from '@furman1331/page-scroller';

import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Experience from './components/Experience';
import Skills from './components/Skills';
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
    <About />
    <WorkExperience />
    <TimelineDivider />
    <Education />
    <Experience />
    <Skills />
    <Contact />
  </div>

   
  );
}

 

export default App;