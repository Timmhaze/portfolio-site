//import './App.css';
import { useEffect, useRef } from 'react';
import { usePageScroller } from '@furman1331/page-scroller';
import { Container } from 'react-bootstrap';

import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const { initPageScroller } = usePageScroller();
  const isInitialized = useRef(false);

  //  Because this is a dev environment (<Strict> tags in main.tsx), the 
  //  component is mounted twice to help find accidentally impure code. 
  //  this just checks if the isInitialized ref is false or true to prevent errors due to this behaviour.
  useEffect(() => {
    if (!isInitialized.current) {
       usePageScroller({ isAllowToScrollThroughSlides: true }).initPageScroller('#scroll-body');
       isInitialized.current = true;
    }
  }, [initPageScroller]);

  return (
      <div id="scroll-body">
        <section className="page-scroller__section">
          <About />
        </section>

        <section className="page-scroller__section">
          <Experience />
        </section>

        <section className="page-scroller__section">
          <Skills />
        </section>

        <section className="page-scroller__section">
          <Contact />
        </section>
    </div>
  );
}

export default App;