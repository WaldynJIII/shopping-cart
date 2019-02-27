import React, { Component } from 'react';
import { connect } from 'react-redux'


class ProductListItem extends Component {

    addProductToCart = () => {
        console.log(this.props.product);
       this.props.dispatch({type: 'ADD_CART', payload: this.props.product,})
        
    }

    render() {
        return (
            <li>
                {this.props.product.name}: {this.props.product.price} <button onClick={this.addProductToCart}>Add to Cart</button>
            </li>
        )
    }
} const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(ProductListItem);