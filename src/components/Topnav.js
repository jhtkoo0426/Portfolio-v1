import TopnavLink from "./TopnavLink"
import '../css/app.css';


const Topnav = () => {
  return (
    <nav className="topnav">
      <div className="logo">J</div>
      <TopnavLink link="https://github.com/jhtkoo0426" iconName={['fab', 'github']}></TopnavLink>
    </nav>
  )
}

export default Topnav
