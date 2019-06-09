import React from 'react'
import Burger from '../../burger/burger'
import './checkoutsummary.css'

const checkoutSummary = (props) => {
  return (
    <div className = "Checkoutsummary">
      <h1>We Hope it tastes good</h1>
      <div style = {{width:'100%', margin:'auto'}}>
        <Burger ingredients = {props.ingredients}/>
      </div>
      <button style = {{marginRight:'20px'}} onClick = {props.cancel}> Cancel </button>
      <button onClick = {props.ok}> Continue</button>
    </div>
  )
}

export default checkoutSummary;
