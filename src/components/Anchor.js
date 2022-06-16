// React.js component for anchor with applied CSS effects.
const Anchor = ({ id, children, href, extra_class }) => {
    return (
        <a className={`anchor ${extra_class}`} href={href} target="_blank" id={id}>{ children }</a>
    )
}

export default Anchor