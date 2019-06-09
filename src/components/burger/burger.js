import React from 'react';
import './burger.css';
import BurgerIngredient from './burgeringredient/burgeringredient';

const burger = (props) =>{

  let transformedIngredients = Object.keys(props.ingredients).map(
    igkey =>{
      return [...Array(props.ingredients[igkey])].map((_,i)=>{
        return <BurgerIngredient key = {igkey+i} type = {igkey}/>;
      });
    }
  );


    let sum=0,i;
    for(i=0; i<transformedIngredients.length;i++){
      sum+=transformedIngredients[i].length;
    };
    if(sum === 0){
      transformedIngredients = <p>please add something</p>;
    }

  return(
    <div className = "Burger">
      <BurgerIngredient type = "bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type = "bread-bottom"/>
    </div>
  );
};

export default burger;
