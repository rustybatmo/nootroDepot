import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import CartItem from "../../components/cartItem/cartItem";
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
          id={product.id}
          count={product.count}
          handlePrice={this.handlePrice}
        />
      );
    });

    return (
      <Fragment>
        Cart Page
        {output}
        <h1>Total Price: {totalPrice} $</h1>
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

export default connect(mapStateToProps, null)(Cart);
