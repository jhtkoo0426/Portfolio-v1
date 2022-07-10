import PageSection from '../components/PageSection';
import SectionTitle from '../components/SectionTitle';
import SectionSubtitle from '../components/SectionSubtitle';
import SectionContent from '../components/SectionContent';
import SectionImage from '../components/SectionImage';
import l4s_login from "../media/l4s_login.JPG";
import l4s_oxbridge from "../media/l4s_oxbridge.JPG";
import l4s_pupil from "../media/l4s_pupil_composition_chart.JPG";
import l4s_school_academics from "../media/l4s_school_academics_graph.JPG";


const Work_L4S = () => {
    return (
        <div className='content'>
            <PageSection id={"selected-works-l4s"}>
                <SectionImage source={l4s_login}></SectionImage>
                <SectionTitle>Look4Schools UK - Django Webapp Prototype</SectionTitle>
                <SectionImage source={l4s_pupil}></SectionImage>
                <SectionImage source={l4s_oxbridge}></SectionImage>
                <SectionImage source={l4s_school_academics}></SectionImage>
            </PageSection>
        </div>
    )
}

export default Work_L4S;