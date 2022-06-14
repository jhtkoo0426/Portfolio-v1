// React.js component for a main section's title.
const SectionTitle = ({ id, children }) => {
    return (
        <h1 className="section-title" id={id}>{ children }</h1>
    )
}

export default SectionTitle