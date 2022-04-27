import Topnav from "./components/Topnav"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from "react"

import './css/app.css';


library.add(fab, faGithub, faLinkedin, faCheckSquare, faCoffee)


function App() {
  useEffect(() => {
    document.title = "Justin Koo";
  })

  return (
    <div className="page-container">
      <Topnav></Topnav>
      <div className="intro container">
        <p>I'm a Computer Science undergraduate based in London, UK.</p>
        <p>I build data-driven web applications outside of university.</p>
      </div>
    </div>
  );
}

export default App;
