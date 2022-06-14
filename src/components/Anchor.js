// React.js component for anchor with applied CSS effects.
const Anchor = ({ id, children, href }) => {
    return (
        <a className="anchor" href={href} target="_blank" id={id}>{ children }</a>
    )
}

export default Anchor