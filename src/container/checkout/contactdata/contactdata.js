import React from 'react'
import './contactdata.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/ui/spinner/spinner'

class ContactData extends React.Component {
  state = {
    name :'',
    email:'',
    address: {
      street : '',
      postalcode:''
    },
    lodaing:false

  }
  orderHandler = (event) =>{
    event.preventDefault();
    alert("You Continue");
    this.setState({loading:true})
    const order = {
      price : this.props.price,
      ingredients : this.props.ingredients,
      customer : {
        name : 'Ansh',
        address: {
          street:"Spg",
          zip : 1008
        },
        email : 'asasd@gmail.com'
      },
      deliveryMethod : 'fastest'
    };

    axios.post("/orders.json",order)
    .then(response =>{
      // console.log(response);
      this.setState({loading:false})
      this.props.history.push('/');
    })
    .catch(error =>
      // console.log(error));
      this.setState({loading:false}))

  }
  render () {
    let form = (
      <form>
        <input type ="text" name = "name" placeholder = "your name"/>
        <input type ="email" name = "email" placeholder = "your email"/>
        <input type ="text" name = "street" placeholder = "street"/>
        <input type ="text" name = "postalcode" placeholder = "postalcode"/>
        <button onClick = {this.orderHandler}>Order</button>
      </form>
    );
    if(this.state.loading){
      form = <Spinner></Spinner>;
    }

    return(
      <div className = "Contactdata">
        <h4>Enter your Contact Data</h4>
        {form}

      </div>
    )

  }
}

export default ContactData;
