import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import CartItem from "../../components/cartItem/cartItem";
import { push } from "../../redux-first-routing/actions";
// import { selectCartItems } from "../../selectors/cartSelectors";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: {},
    };
  }

  render() {
    const { cartProducts = [], totalPrice = 0 } = this.props;

    const output = cartProducts.map((product) => {
      return (
        <CartItem
          item={product}
          price={product.price}
          id={product.id}
          count={product.count}
          handlePrice={this.handlePrice}
        />
      );
    });

    const handleCheckout = () => {
      const { push } = this.props;
      push("/credentials");
    };

    return (
      <Fragment>
        Cart Page
        {output}
        <h1>Total Price: {totalPrice} $</h1>
        <button onClick={handleCheckout}>Proceed to Checkout</button>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    cartProducts: state.cartReducer.cartItems,
    totalPrice: state.cartReducer.totalPrice,
  };
};

export default connect(mapStateToProps, { push })(Cart);
