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


const FadeUp = batch(Fade(), MoveOut(0, -600), Sticky());
const MoveInLeft = batch(MoveIn(-1000, 0));

const Home = () => {
    return (
        <div className='content'>
            {/* Intro section */}
            <ScrollContainer>
                <ScrollPage>
                    <Animator animation={FadeUp}>
                        <PageSection id={"intro"}>
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
            {/* TODO: Add "check out featured works" guided link. */}

            <PageSection id={"l4s-section"}>
                <SectionContent classes={"l4s-proj-showcase"}>
                <SectionImage source={l4s_landing} id={"l4s-proj-img"}></SectionImage>
                </SectionContent>
                <SectionTitle id={"l4s-proj-subtitle"}>Webdev - case available via <Link to="work">link</Link></SectionTitle>
                <SectionTitle id={"l4s-proj-title"}>Look4Schools UK - Django Webapp Prototype </SectionTitle>
                {/* TODO: Add link to view details of project */}
            </PageSection>
            

            <PageSection id={"autofaq-section"}>
                <SectionContent classes={"autofaq-proj-showcase"}>
                <SectionImage source={l4s_landing} id={"autofaq-proj-img"}></SectionImage>
                </SectionContent>
                <SectionTitle id={"autofaq-proj-subtitle"}>Web Development/Machine Learning - case available 
                on request
                </SectionTitle>
                <SectionTitle id={"autofaq-proj-title"}>UCL IXN Programme - AutoFAQ Webapp</SectionTitle>
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
        </div>
    );
}

export default Home;