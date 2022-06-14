// React.js component for a main section's content.
const SectionContent = ({ id, children, classes }) => {
    return (
        <section className={classes} id={id}>
            { children }
        </section>
    )
}

export default SectionContent