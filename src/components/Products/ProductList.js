import React, { Component } from 'react';
import ProductListItem from './ProductListItem';
import { connect } from 'react-redux'


class ProductList extends Component {

    render() {
        return (
            <div>
                <ul>
                   {this.props.reduxStore.productReducer.map((product, i) => {
                       return (
                           <ProductListItem key={i} product={product} />
                       );
                   })} 
                </ul>
            </div>
        )
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(ProductList);