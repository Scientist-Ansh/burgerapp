import React,{Component} from 'react';

class Ordersummary extends Component {

  componentDidUpdate(){
    console.log("ord sum up");
  }
  render(){
    const ingredientssummary = Object.keys(this.props.ingredients).map(
      igkey=>{
        return <li key = {igkey}> {igkey}: {this.props.ingredients[igkey]}</li>
      }
    );
    return(
      <>
      <h3>Your Order</h3>
      <p>Your burger</p>
      <ul>
        {ingredientssummary}
      </ul>
      <h5>Total Price : {this.props.burgerPrice}</h5>
      <p> Continue to checkout</p>
      <button onClick = {this.props.continue} style = {{marginRight:"20px",backgroundColor: '#4CAF50'}}> Continue</button>
      <button onClick = {this.props.exit} style = {{backgroundColor: '#f44336',display:'inline-block'}}> Exit </button>
      </>
    );


  }





};

export default Ordersummary;
