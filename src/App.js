import { library } from '@fortawesome/fontawesome-svg-core'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import PageSection from './components/PageSection';
import SectionTitle from './components/SectionTitle';
import SectionSubtitle from './components/SectionSubtitle';
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect, useRef } from "react"
import Scrollbar from 'smooth-scrollbar'
import "../src/css/app.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const App = () => {
  // Loading state
  // Scrollbar.init(document.querySelector('#my-scrollbar'));
  const [isLoading, setIsLoading] = useState(true);

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  useEffect(() => {
    // Loading time transition into app page
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ?
  	// If page is still loading then display the splash screen
  	<div className="splash-screen">
      <h1 className="splash-screen-title">
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
      </h1>
    </div>:
  	<div className="app">
      <nav class="topnav pd0-15w">
          <a href="">justin.</a>
          <div class="topnav-menu">
              <a href="">about</a>
              <a href="">work</a>
              <a class="hoverable" href="https://github.com/jhtkoo0426" target="_blank">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </a>
              <a class="hoverable" href="https://www.linkedin.com/in/justin-koo-29bb831b2/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </a>
              <button class="bulb" id="bulb">
                <FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon>
              </button>
          </div>
      </nav>

      <PageSection id={"intro"}>
        <SectionTitle>justin <span>is...</span></SectionTitle>
        <SectionSubtitle>a Computer Science undergraduate based in London</SectionSubtitle>
        <SectionSubtitle>++ University College London (Year 2)</SectionSubtitle>
        <SectionSubtitle>++ interested in data science & finance</SectionSubtitle>
        <SectionSubtitle>++ playing with machine learning</SectionSubtitle>
        <SectionSubtitle>++ astrophotographer</SectionSubtitle>
      </PageSection>

      <PageSection>
        <SectionTitle>Curriculum Vitae</SectionTitle>
        <SectionSubtitle>&gt;&gt; and work showcase</SectionSubtitle>
      </PageSection>

      <PageSection>
        
      </PageSection>
  	</div>
}

export default App;
