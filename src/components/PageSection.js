const PageSection = ({ children, extra_class, id }) => {
    return (
        <section className={`page-section ${extra_class}`} id={id}>
            { children }
        </section>
    )
}

export default PageSection