import PageSection from '../components/PageSection';
import SectionTitle from '../components/SectionTitle';
import SectionSubtitle from '../components/SectionSubtitle';
import SectionContent from '../components/SectionContent';
import SectionImage from '../components/SectionImage';
import ProjectBox from "../components/ProjectBox";
import Anchor from "../components/Anchor";
import l4s_landing from '../media/l4s_device_mockup.png';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { Link } from 'react-router-dom';


const FadeUpSticky = batch(Fade(), MoveOut(0, -600), Sticky());
const FadeUp = batch(Fade(), MoveOut(0, -200));
const MoveInLeft = batch(MoveIn(-250, 0));
const MoveInRight = batch(MoveIn(250, 0));

const Home = () => {
    return (
        <div className='content'>
            {/* The ScrollContainer, ScrollPage and Animator components are part of
                the react-scroll-motion package. These help create the scrolling
                effects seen on the page. */}
            <ScrollContainer>
                <ScrollPage>
                    <Animator animation={FadeUpSticky}>
                        {/* Intro section */}
                        <PageSection extra_class={"intro"}>
                            <SectionTitle>Fast and Curious.</SectionTitle>
                            <SectionSubtitle>I’m a software engineer specializing in building (and occasionally designing) 
                            exceptional digital experiences.</SectionSubtitle>
                            <div className='guide'>
                                <p>Check out my works below</p>
                                <div className='guide-line'></div>
                            </div>
                        </PageSection>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>

            <PageSection extra_class={"ps-work-showcase"}>
                <SectionContent classes={"proj-showcase"}>
                    <SectionImage source={l4s_landing} id={"l4s-proj-img"}></SectionImage>
                </SectionContent>
                <SectionTitle id={"l4s-proj-subtitle"}>Webdev - Case available</SectionTitle>
                <SectionTitle id={"l4s-proj-title"}>Look4Schools UK - Django Webapp Prototype </SectionTitle>
                <Link to="work">See Project</Link>
            </PageSection>

            <PageSection extra_class={"ps-work-showcase"}>
                <SectionContent classes={"proj-showcase"}>
                    <SectionImage source={l4s_landing} id={"autofaq-proj-img"}></SectionImage>
                </SectionContent>
                <SectionTitle id={"autofaq-proj-subtitle"}>Webdev & ML - Case available 
                on request
                </SectionTitle>
                <SectionTitle id={"autofaq-proj-title"}>UCL IXN Programme - AutoFAQ Webapp</SectionTitle>
            </PageSection>

            <PageSection extra_class={"ps-work-showcase"}>
                <SectionContent classes={"proj-showcase"}>
                    <SectionImage source={l4s_landing} id={"okane-proj-img"}></SectionImage>
                </SectionContent>
                <SectionTitle id={"okane-proj-subtitle"}>Algorithms & Trading - Case available</SectionTitle>
                <SectionTitle id={"okane-proj-title"}>Personal Featured Project - Okane</SectionTitle>
                <Link to="work">See Project</Link>
            </PageSection>

            <PageSection extra_class={"other-projects-section"}>
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
        </div>
    );
}

export default Home;