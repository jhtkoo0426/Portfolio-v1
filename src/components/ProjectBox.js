import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLink, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Anchor from "./Anchor";

// React.js component for an "other project".
const ProjectBox = ({ id, children, title, gh_link, web_link }) => {
    return (
        <div className="project-box" id={id}>
            <div className="pb-header">
                <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon>
                <div className='pb-links'>
                    <Anchor href={gh_link} extra_class="no-animate">
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </Anchor>
                    <Anchor href={web_link} extra_class="no-animate">
                        <FontAwesomeIcon icon={faExternalLink}></FontAwesomeIcon>
                    </Anchor>
                </div>
            </div>
            <h1 className="pb-title">{title}</h1>
            {children}
        </div>
    )
}

export default ProjectBox