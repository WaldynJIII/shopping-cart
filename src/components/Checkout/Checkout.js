import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router';

class Checkout extends Component {
state={
    price: 0,
    redirect: false,
}
componentDidMount=()=>{
    this.priceCheck()
}
    handleCheckout = () => {
        this.props.dispatch({type: "CLEAR_CART",})
        this.setState({
            redirect: true
        })

    }
    priceCheck = () =>{
        this.props.reduxStore.checkoutReducer.map(product=>(
            this.setState({
                ...this.state,
                price: this.state.price +  Number(product.price),
            })
        ))
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/" />;
        }
        return (
           
            <div>
      
                <h2>Checkout</h2>

                <ul>
                {this.props.reduxStore.checkoutReducer.map(product=>(
               <li>{product.name} {product.price}</li>))}
                </ul>
            
                <button onClick={this.handleCheckout}>
                   
                    Checkout</button>
                    <footer>
                        {this.state.price}
                    </footer>
                    
            </div>
           
        )
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(Checkout);