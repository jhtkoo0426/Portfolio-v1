const PageSection = ({ id, children, extra_class }) => {
    return (
        <section className={`page-section ${extra_class}`} id={id}>
            { children }
        </section>
    )
}

export default PageSection