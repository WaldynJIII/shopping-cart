import React, { Component } from 'react';
import { connect } from 'react-redux'

class Checkout extends Component {

    handleCheckout = () => {
        // TODO: Clear the cart and navigate to the product page

    }

    render() {
        return (
            <div>
                <h2>Checkout</h2>
                {/* TODO: Display items in the cart */}

                <button onClick={this.handleCheckout}>Checkout</button>
            </div>
        )
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(Checkout);