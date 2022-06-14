import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import PageSection from './components/PageSection'
import SectionTitle from './components/SectionTitle'
import SectionSubtitle from './components/SectionSubtitle'
import SectionContent from './components/SectionContent'
import SectionImage from './components/SectionImage'
import ProjectBox from "./components/ProjectBox"
import Anchor from "./components/Anchor"
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React, { useState, useEffect, useRef } from "react"
import Scrollbar from 'smooth-scrollbar'
import "../src/css/app.css";
import l4s_landing from './media/l4s_device_mockup.png';


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
              <Anchor>about</Anchor>
              <Anchor>work</Anchor>
          </div>
        </nav>
        <PageSection id={"intro"}>
          <SectionTitle>Fast and Curious.</SectionTitle>
          <SectionSubtitle>I’m a software engineer specializing in building (and occasionally designing) 
            exceptional digital experiences.</SectionSubtitle>
        </PageSection>
        {/* TODO: Add "check out featured works" guided link. */}

        {/* TODO: Move about section to "About" page. */}
        <PageSection id={"about-section"}>
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

        <PageSection id={"l4s-section"}>
          <SectionContent classes={"l4s-proj-showcase"}>
            <SectionImage source={l4s_landing} id={"l4s-proj-img"}></SectionImage>
          </SectionContent>
          <SectionTitle id={"l4s-proj-subtitle"}>Web Development - case available via link</SectionTitle>
          <SectionTitle id={"l4s-proj-title"}>Django Webapp Prototype - Look4Schools UK</SectionTitle>
          {/* TODO: Add link to view details of project */}
        </PageSection>

        <PageSection id={"autofaq-section"}>
          <SectionContent classes={"autofaq-proj-showcase"}>
            <SectionImage source={l4s_landing} id={"autofaq-proj-img"}></SectionImage>
          </SectionContent>
          <SectionTitle id={"autofaq-proj-subtitle"}>Web Development/Machine Learning - case available 
            on request
          </SectionTitle>
          <SectionTitle id={"autofaq-proj-title"}>AutoFAQ Webapp - UCL IXN Programme</SectionTitle>
          {/* TODO: Add link to view details of project */}
        </PageSection>

        <PageSection id={"okane-section"}>
          <SectionContent classes={"okane-proj-showcase"}>
            <SectionImage source={l4s_landing} id={"okane-proj-img"}></SectionImage>
          </SectionContent>
          <SectionTitle id={"okane-proj-subtitle"}>Algorithms & Trading - case available via link</SectionTitle>
          <SectionTitle id={"okane-proj-title"}>Okane - Personal Featured Project</SectionTitle>
          {/* TODO: Add link to view details of project */}
        </PageSection>
        
        {/* hi */}

        <PageSection id={"other-projects-section"}>
          <SectionTitle>
            Other Projects
          </SectionTitle>
          <SectionSubtitle>Some projects that I'm really proud of!</SectionSubtitle>
          <div className="projects-container">
              <ProjectBox id={"pathfinder"} title="Pathfinder">
                <p>Hello</p>
              </ProjectBox>
              <ProjectBox id={"tetris"} title="Tetris Bot">
                <p>Hello</p>
              </ProjectBox>
              <ProjectBox id={""} title="Testing">
                <p>Hello</p>
              </ProjectBox>
          </div>
        </PageSection>

        <nav className="botnav">
          <div className="botnav-menu">
            <Anchor href={"https://www.linkedin.com/in/justin-koo-29bb831b2/"}>LinkedIn</Anchor>
            <Anchor href={"https://github.com/jhtkoo0426"}>Github</Anchor>
            <Anchor href={""}>Email</Anchor>
          </div>
          <p>Created from scratch with React.js</p>
        </nav>

        {/* TODO: Add work experience section. */}
        {/* <PageSection id={"l4s-2"}>
          <SectionTitle>...and also collected and analysed UK school data, e.g. A Level performance,
            school inspection ratings, etc.
          </SectionTitle>
        </PageSection> */}
      </div>
  	</div>
}

export default App;
