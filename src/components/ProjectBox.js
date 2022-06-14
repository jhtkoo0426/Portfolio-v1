// React.js component for an "other project".
const ProjectBox = ({ id, children, title }) => {
    return (
        <div className="project-box" id={id}>
            <h1 className="pb-title">{title}</h1>
            {children}
        </div>
    )
}

export default ProjectBox