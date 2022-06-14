// React.js component for a main section's subtitle.
const SectionSubtitle = ({ id, children}) => {
    return (
        <p className="section-subtitle" id={id}>{ children }</p>
    )
}

export default SectionSubtitle