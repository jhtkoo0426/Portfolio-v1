const PageItem = ({id, children}) => {
    return (
        <div className="page-item" id={id}>
            { children }
        </div>
    )
}

export default PageItem