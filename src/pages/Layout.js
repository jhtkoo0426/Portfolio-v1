import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div className="app">
          <nav className="topnav">
            <Link to="/">justin koo</Link>
            <div className="topnav-menu">
                <Link to="/about">about</Link>
            </div>
          </nav>  
          <Outlet/>
        </div>
    );
};

export default Layout;