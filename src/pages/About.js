import PageSection from '../components/PageSection';
import SectionTitle from '../components/SectionTitle';
import SectionSubtitle from '../components/SectionSubtitle';

const About = () => {
    return (
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
    )
}

export default About;