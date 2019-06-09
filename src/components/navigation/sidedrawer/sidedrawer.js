import React from 'react'
import Logo from "../../logo/logo"
import NavigationItems from "../navigationitems/navigationitems";
import "./sidedrawer.css";

const sideDrawer = (props) => {


  return (
    <div className ="Sidedrawer">
      <Logo/>
      <nav>
        <NavigationItems/>
      </nav>
    </div>
  )
}

export default sideDrawer
