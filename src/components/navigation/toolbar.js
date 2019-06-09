import React from 'react';
import './toolbar.css';
import Logo from '../logo/logo.js';
import NavigationItems from "./navigationitems/navigationitems";

const toolbar = (props) => {
  return(
    <header className = "Toolbar">
      <div>Menu</div>
      <Logo/>
      <nav className = "Toolbar_nav">
        <NavigationItems></NavigationItems>
      </nav>
    </header>
  )
}


export default toolbar
