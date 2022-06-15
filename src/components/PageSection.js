const PageSection = ({ children, extra_class }) => {
    return (
        <section className={`page-section ${extra_class}`}>
            { children }
        </section>
    )
}

export default PageSection