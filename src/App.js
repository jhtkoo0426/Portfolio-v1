import { library } from '@fortawesome/fontawesome-svg-core'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import PageSection from './components/PageSection'
import SectionTitle from './components/SectionTitle'
import SectionSubtitle from './components/SectionSubtitle'
import SectionContent from './components/SectionContent'
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faLightbulb, faProjectDiagram, faRobot, faDesktopAlt } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect, useRef } from "react"
import Scrollbar from 'smooth-scrollbar'
import "../src/css/app.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import l4s_landing from './media/l4s.JPG'
import l4s_login from './media/l4s_login.JPG';


const App = () => {
  // Loading state
  // Scrollbar.init(document.querySelector('#my-scrollbar'));
  const [isLoading, setIsLoading] = useState(true);

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());


  // Bulb light on/off function
  var clicked = false;
  var dark_grey = "#101211";
  var white = '#fff';
  var grey = '#cecece';

  const bulb = React.useRef(null);

  useEffect(() => {
    function letThereBeLight() {
      if (clicked == false) {
          clicked = true;
          document.documentElement.style.setProperty("--dark-grey", white);
          document.documentElement.style.setProperty("--white", dark_grey);
          document.documentElement.style.setProperty("--grey", dark_grey);
      } else {
          clicked = false;
          document.documentElement.style.setProperty("--dark-grey", dark_grey);
          document.documentElement.style.setProperty("--white", white);
          document.documentElement.style.setProperty("--grey", grey);
      }
    }

    if (bulb && bulb.current) {
      bulb.current.addEventListener('click', letThereBeLight);
    }
  })

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
      <nav className="topnav pd0-15w">
          <a href="">justin.</a>
          <div className="topnav-menu">
              <a href="">about</a>
              <a href="">work</a>
              <a className="hoverable" href="https://github.com/jhtkoo0426" target="_blank" rel="noreferrer" style={{color: "var(--turqoise)"}}>
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </a>
              <a className="hoverable" href="https://www.linkedin.com/in/justin-koo-29bb831b2/" target="_blank" rel="noreferrer" style={{color: "var(--turqoise)"}}>
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </a>
              <button className="bulb" id="bulb" ref={bulb}>
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
        <SectionTitle>Look4SchoolsUK<br></br><span>(April 2020 - Present)</span></SectionTitle>
        <SectionSubtitle>&gt;&gt; an education agency that introduces international
                students to study in the UK.</SectionSubtitle>
      </PageSection>

      <PageSection>
        <SectionTitle>While working at L4S, I contributed to the company's website design
                process, and built a <span>Django webapp prototype</span>, to demonstrate the 
                workflow for managing account entities and school applications...</SectionTitle>
        <SectionContent classes={"prototype-display"}>
          <img src={l4s_landing} alt="" className='l4s_landing'></img>
          <img src={l4s_login} alt="" className='l4s_login'></img>
        </SectionContent>
      </PageSection>

      <PageSection>
        <SectionTitle>
          selected projects <span><FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon></span>
        </SectionTitle>
        <SectionSubtitle>&gt;&gt; some of my projects that I'm really proud of!</SectionSubtitle>
      </PageSection>
  	</div>
}

export default App;
