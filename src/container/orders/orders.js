import React from 'react'
import PropTypes from 'prop-types'
import Order from '../../components/order/order'
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class Orders extends React.Component {

  state = {
    orders : [],
    loading : false
  }
  componentDidMount(){
    axios.get('/orders.json')
    .then(res =>{
      console.log(res);
      const fetchedOrders = [];
      for (let key in res.data){
        fetchedOrders.push(
          {...res.data[key],
          id:key}
        );
      }
      this.setState({loading:false,orders:fetchedOrders})
    })
    .catch(err=>{
    this.setState({loading:false})
    });
  }
  render () {
    return(
      <div>
        {this.state.orders.map(order =>
        <Order
          ingredients = {order.ingredients}
          price = {order.price}
          key = {order.id}/>
      )}

      </div>
    );

  }
}

export default withErrorHandler(Orders,axios);
