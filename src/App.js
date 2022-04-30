import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect, useRef } from "react"
import "../src/css/app.css";


const App = () => {
  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading time transition into app page
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ?
  	// If page is still loading then display the splash screen
  	<div className="splash-screen">
      <h1 className="splash-screen-title">this is the splash screen...</h1>
    </div>:
  	<div className="app">
      <div className='intro'>
        <h1 className='app-title'>Hello, I'm Justin. I'm a Computer Science undergraduate based in London</h1>
        <h1 className='app-subtitle'>I'm interested in full-stack development with applied data science and machine learning.</h1>
      </div>
  	</div>

  // return (
  //   <div className="splash-screen">
  //     <h1 className="splash-screen-title">never gonna give you up</h1>
  //     <h3>uwu</h3>
  //   </div>
  // )
}

export default App;
