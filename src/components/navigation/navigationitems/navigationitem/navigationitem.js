import React from 'react';
import "./navigationitem.css";
import {Link} from 'react-router-dom'

const navigationItem = (props) => {
  return (
    <li className = "Navigationitem">
      <Link to = {props.link}>{props.children}</Link>
    </li>
  )
}

export default navigationItem
