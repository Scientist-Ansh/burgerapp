import React from 'react';
import './buildcontrols.css';
import BuildControl from './buildcontrol/buildcontrol';

const controls = [
  {label: 'Salad' , type : 'salad'},
  {label: 'Bacon' , type : 'bacon'},
  {label: 'Chesse' , type : 'chesse'},
  {label: 'Meat' , type : 'meat'},

];
const buildControls = (props) =>(
  <div className = "BuildControls">
    <p>Current price: {props.price}</p>
  {controls.map(ctrl=>(
    <BuildControl
    added = {()=>props.ingredientAdded(ctrl.type)}
    removed = {()=>props.ingredientRemoved(ctrl.type)}
    label = {ctrl.label}
    key = {ctrl.label}
    disabled = {props.disabled[ctrl.type]}/>
  ))}

  <button className ="OrderButton"
  disabled = {props.purchasable}
  onClick = {props.ordering}>
   ORDER NOW </button>
  </div>
)

export default buildControls;
