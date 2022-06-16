import PageSection from '../components/PageSection';
import SectionTitle from '../components/SectionTitle';
import SectionSubtitle from '../components/SectionSubtitle';
import SectionContent from '../components/SectionContent';
import SectionImage from '../components/SectionImage';
import ProjectBox from "../components/ProjectBox";
import Anchor from "../components/Anchor";

import l4s_landing from '../media/l4s_device_mockup.png';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='content'>
            <PageSection extra_class={"intro"}>
                <SectionTitle>Fast and Curious.</SectionTitle>
                <SectionSubtitle>I’m a Computer Science undergrad focused on web development and machine learning.</SectionSubtitle>
                <div className='guide'>
                    <p>Check out my works below</p>
                    <div className='guide-line'></div>
                </div>
            </PageSection>

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
                <SectionTitle>Other Projects</SectionTitle>
                <SectionSubtitle>Some projects that I'm really proud of!</SectionSubtitle>
                <div className="projects-container">
                    <ProjectBox id={"pathfinder"} title="Pathfinder" gh_link="https://github.com/jhtkoo0426/Pathfinder" web_link="">
                        <p className='pb-description'>Interactive web application that visualises
                         the route-finding process between 2 London Underground stations.</p>
                        <div className='pb-stack'>
                            <span>Django</span><span>Python</span><span>HTML5</span>
                            <span>CSS</span><span>JavaScript</span>
                        </div>
                    </ProjectBox>
                    <ProjectBox id={"tetris"} title="Tetris Bot" gh_link={"https://github.com/jhtkoo0426/UCL-Tetris-AI"} web_link="">
                        <p className='pb-description'>An autoplayer that plays Tetris. The bot 
                        will attempt to get the highest score possible until the game is over.</p>
                        <div className='pb-stack'>
                            <span>Python</span>
                        </div>
                    </ProjectBox>
                    <ProjectBox id={"portfolio"} title="Portfolio v1" gh_link={"https://github.com/jhtkoo0426/Portfolio-v1"} web_link="">
                        <p className='pb-description'>The first iteration of justinkoo.co.uk, built 
                        with React.js.</p>
                        <div className='pb-stack'>
                            <span>React.js</span><span>JavaScript</span><span>CSS</span>
                        </div>
                    </ProjectBox>
                </div>
            </PageSection>
            
            <nav className="botnav">
                <div className="botnav-menu">
                    <Anchor href={"https://www.linkedin.com/in/justin-koo-29bb831b2/"}>LinkedIn</Anchor>
                    <Anchor href={"https://github.com/jhtkoo0426"}>Github</Anchor>
                </div>
                <p>You can also find me via email: <span>jhtkbusiness@gmail.com</span></p>
                <p>Created from scratch with React.js</p>
            </nav>
        </div>
    );
}

export default Home;