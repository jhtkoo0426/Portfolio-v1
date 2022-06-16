import PageSection from '../components/PageSection';
import SectionTitle from '../components/SectionTitle';
import SectionSubtitle from '../components/SectionSubtitle';

const About = () => {
    return (
        <PageSection id={"about-section"}>
            <SectionTitle>About Me</SectionTitle>
            <SectionSubtitle>Hi there! I'm Justin, currently studying towards a Bachelors 
                degree in Computer Science at University College London. At the moment, 
                I'm focused on discovering the depths of machine learning (and learning 
                to trade on the side for a few quick bucks 😎). I hope to someday be able 
                to develop a sit-back-and-relax trading bot that can perform well even when 
                the market takes a dive!
            </SectionSubtitle><br></br>
            <SectionSubtitle>During lockdowns and the pandemic, I made use of the extra free 
                time I had and enrolled in courses related to machine learning, finance and 
                web development (and design), while occasionally building webapps and 
                automated projects.
            </SectionSubtitle>
        </PageSection>
    )
}

export default About;