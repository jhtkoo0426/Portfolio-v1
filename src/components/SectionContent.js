const SectionContent = ({ id, children, classes }) => {
    return (
        <section className={classes} id={id}>
            { children }
        </section>
    )
}

export default SectionContent