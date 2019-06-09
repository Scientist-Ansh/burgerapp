import React, {Component} from 'react';
import Burger from '../../components/burger/burger';
import BuildControls from '../../components/burger/buildcontrols/buildcontrols';
import Modal from '../../components/ui/modal/modal';
import OrderSummary from '../../components/burger/ordersummary/ordersummary';
import axios from '../../axios-orders.js';
import Spinner from '../../components/ui/spinner/spinner.js';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  salad:0.5,
  bacon:1,
  chesse:1,
  meat:1.5
};

class BurgerBuilder extends Component{

  state = {
    ingredients:null,
    totalPrice:4,
    purchasing:false,
    show:false,
    loading:false
  }

  componentDidMount() {
    console.log(this.props);
    axios.get("https://react-burger-fe1a7.firebaseio.com/ingredients.json")
    .then(res =>{
      this.setState({ingredients: res.data})
    });
  }

  addIngredientHandler=(type)=>{
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount+1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + INGREDIENT_PRICES[type];
    this.setState({totalPrice:updatedPrice, ingredients:updatedIngredients});
  }

  removeIngredientHandler=(type)=>
  {

    const oldCount = this.state.ingredients[type];
    if(oldCount>0){
      const updatedCount = oldCount-1;
      const updatedIngredients = {...this.state.ingredients};
      updatedIngredients[type] = updatedCount;
      const oldPrice = this.state.totalPrice;
      const updatedPrice = oldPrice - INGREDIENT_PRICES[type];
      this.setState({totalPrice:updatedPrice, ingredients:updatedIngredients});
    }
    }

    purchaseHandler=()=>{
      this.setState({purchasing:true,show:true});
    }
    modalhide = () =>{
      this.setState({show:false});
    }
    purchaseContinueHandler = () =>{

      const queryParams = [];
      for (let i in this.state.ingredients) {
        queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
      }
      queryParams.push('price='+this.state.totalPrice);
      const queryString = queryParams.join("&");
      this.props.history.push({
        pathname : '/checkout',
        search : '?' + queryString
      });
    }

  render(){

    let sum = 0;
    const disabledInfo = {
      ...this.state.ingredients
    };
    for(let key in disabledInfo){
      sum += disabledInfo[key];
      disabledInfo[key] = disabledInfo[key] <=0;
    }
    const orderinfo = sum <=0;

    let modal = null;
    if(this.state.purchasing && this.state.show){
      modal = (<Modal close = {this.modalhide}>
        {!this.state.loading?
        <OrderSummary
        burgerPrice = {this.state.totalPrice}
        ingredients = {this.state.ingredients}
        continue = {this.purchaseContinueHandler}
        exit = {this.modalhide}/>
        :
        <Spinner/>}

      </Modal>);
    }

    let burger = <Spinner></Spinner>
    if (this.state.ingredients){
      burger = (
        <>
        <Burger ingredients = {this.state.ingredients}/>
        <BuildControls
        ingredientAdded = {this.addIngredientHandler}
        ingredientRemoved = {this.removeIngredientHandler}
        disabled = {disabledInfo}
        purchasable = {orderinfo}
        ordering = {this.purchaseHandler}
        price = {this.state.totalPrice}/>
      </>
      );
    }


    return(
      <>
        {modal}
        {burger}

      </>
    );
  }
}

export default withErrorHandler(BurgerBuilder,axios);
