import React from 'react';
import burgerLogo from '../../assests/burger-logo.png';
import './logo.css';

const logo = (props) => {
  return (
    <div className = "Logo">
      <img src = {burgerLogo} alt = "burger"/>
    </div>
  )
}

export default logo
