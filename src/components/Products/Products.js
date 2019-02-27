import React, { Component } from 'react';
import ProductForm from './ProductForm.js';
import ProductList from './ProductList.js';
import { connect } from 'react-redux'


class Products extends Component {
   

    addNewProduct = (product) => {
        console.log(product);
        // TODO: Switch from using local state to dispatching an action
     this.props.dispatch({type: 'ADD_ALSO', payload: product,})
    }
    render() {
        return (
            <div>
                <h2>Products</h2>
                <ProductForm addNewProduct={this.addNewProduct} />
                <ProductList  />
            </div>
        )
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(Products);