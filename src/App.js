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
      

      {/* Any content that shall be placed in the background --> */}
      <div className='background'></div>
      <div className='content'>
        <nav className="topnav">
          <a href="" className=''>justin koo</a>
          <div className="topnav-menu">
              <a href=''>about</a>
              <a href=''>work</a>
          </div>
        </nav>
        <PageSection id={"intro"}>
          <SectionTitle>Fast and Curious.</SectionTitle>
          <SectionSubtitle>I’m a software engineer specializing in building (and occasionally designing) 
            exceptional digital experiences.</SectionSubtitle>
        </PageSection>
        {/* TODO: Add "check out featured works" guided link */}

        {/* TODO: Move about section to "About" page. */}
        <PageSection>
          <SectionTitle>About</SectionTitle>
          <SectionSubtitle>I am currently working towards a Bachelors degree in Computer Science @ 
            University College London. Since the course mainly focuses on the fundamental concepts of 
            computing, it does not fully prepare me as a software engineer.
          </SectionSubtitle><br></br>
          <SectionSubtitle>During lockdowns and the pandemic, I made use of the extra free time I had 
            and enrolled in courses related to machine learning, finance and web development (and 
            design), while occasionally building webapps and automated projects.
          </SectionSubtitle>
        </PageSection>

        <PageSection>
          <SectionContent classes={"prototype-display"}>
            <img src={l4s_landing} alt="" className='l4s_landing'></img>
            <img src={l4s_login} alt="" className='l4s_login'></img>
          </SectionContent>
          <SectionTitle id={"l4s-title"}>Look4Schools UK</SectionTitle>
          <SectionSubtitle>Since April 2020, I've been working at L4S, a new education agency that aims 
            to introduce students from Hong Kong to study abroad in the UK.
          </SectionSubtitle>
          <SectionSubtitle>While working there, I helped with improving the company's sitemap, and built 
            a <span>Django webapp prototype</span>, to demonstrate the workflow for managing account 
            entities and school applications...
          </SectionSubtitle>
          
        </PageSection>

        {/* <PageSection id={"l4s-2"}>
          <SectionTitle>...and also collected and analysed UK school data, e.g. A Level performance,
            school inspection ratings, etc.
          </SectionTitle>
        </PageSection> */}

        {/* <PageSection>
          <SectionTitle>
            selected projects <span><FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon></span>
          </SectionTitle>
          <SectionSubtitle>&gt;&gt; some of my projects that I'm really proud of!</SectionSubtitle>
        </PageSection> */}

        {/* <PageSection>
          <SectionTitle>okane</SectionTitle>
        </PageSection> */}
      </div>
      {/* <nav>
        <a className="hoverable" href="https://github.com/jhtkoo0426" target="_blank" rel="noreferrer" style={{color: "var(--turqoise)"}}>
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
        <a className="hoverable" href="https://www.linkedin.com/in/justin-koo-29bb831b2/" target="_blank" rel="noreferrer" style={{color: "var(--turqoise)"}}>
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
      </nav> */}
  	</div>
}

export default App;
