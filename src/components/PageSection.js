const PageSection = ({ id, children }) => {
    return (
        <section className="page-section" id={id}>
            { children }
        </section>
    )
}

export default PageSection