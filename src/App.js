import React, { Component } from 'react';
import Layout from './components/layout/layout';
import BurgerBuilder from './container/burgerbuilder/burgerbuilder';
import Checkout from './container/checkout/checkout'
import {Route} from 'react-router-dom'
import Orders from './container/orders/orders'
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        <Route path = "/" exact component = {BurgerBuilder}/>
        <Route path = "/checkout" component = {Checkout}/>
        <Route path = "/orders" component = {Orders}/>


        </Layout>
      </div>
    );
  }
}

export default App;
