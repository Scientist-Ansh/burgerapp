import React from 'react';
import './modal.css';
import BackDrop from '../../ui/backdrop/backdrop';
const modal =(props)=>(
  <>
  <div className = "Modal">
    {props.children}
  </div>
  <BackDrop clicked = {props.close}/>

  </>
);

export default modal;
