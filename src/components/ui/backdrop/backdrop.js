import React from 'react'
import PropTypes from 'prop-types'
import './backdrop.css';
const backDrop = (props) => {
  return (
    <div className ="Backdrop" onClick = {props.clicked}></div>
  )
}

export default backDrop
