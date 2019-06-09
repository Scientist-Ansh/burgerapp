import React, {Component} from 'react';
import CheckOutSummary from '../../components/order/checkoutsummary/checkoutsummary'
import {Route} from 'react-router-dom'
import ContactData from './contactdata/contactdata'

class Checkout extends Component{

  state = {
    ingredients : null,
    totalPrice:0
  }

  onokHandler = () =>{
    this.props.history.replace('/checkout/contact-data');

  }

  oncancelHandler = () =>{
    this.props.history.goBack();

  }

  componentWillMount(){
    console.log(this.props);
    console.log("hi");
    const query  = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for ( let param of query.entries()){
      if(param[0]==='price'){
        price = param[1];
      }
      else{
        ingredients[param[0]] = +param[1];
      }

    }
    this.setState({ingredients:ingredients,totalPrice:price});
  }
  render(){
    return(
      <div>
        <CheckOutSummary
        ok = {this.onokHandler}
        cancel = {this.oncancelHandler}

         ingredients = {this.state.ingredients}/>

         <Route path = {this.props.match.path + '/contact-data'}
          render ={(props)=>(<ContactData ingredients = {this.state.ingredients} {...props}
            price = {this.state.totalPrice}/>)}/>
      </div>
    );
  }

}

export default Checkout;
