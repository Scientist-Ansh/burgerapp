import React from 'react'
import PropTypes from 'prop-types'
import './order.css'

const order = (props) => {

  const ingredients = [];
  for (let ing in props.ingredients){
    ingredients.push({name:ing,
      amount:props.ingredients[ing]});
  }
  const ingredientOutput = ingredients.map(ig =>
  <span key = {ig.name}
    style = {{
      textTransform:"capitalize",
      // display:"inline-block",
      border:"1px solid #eee",
      margin:'0 8px',
      padding:'5px'
    }}>{ig.name} ({ig.amount})</span>)
  return (
    <div className = "Order">
      <p>Ingredients :{ingredientOutput}</p>
      <p>Price : <strong>{props.price}$</strong></p>
    </div>
  )
}

export default order
