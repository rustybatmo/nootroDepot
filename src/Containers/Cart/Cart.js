import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { getProductsThunk } from "../../actions/productActions";
import CartItem from "../../components/cartItem/cartItem";
import { selectCartItems } from "../../selectors/cartSelectors";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: {},
    };
    // this.getCartItems = this.getCartItems.bind(this);
  }

  // getCartItems = () => {};

  // componentDidMount() {
  //   getCartItems();
  // }

  render() {
    const { cartProducts = [] } = this.props;
    const output = cartProducts.map((product) => {
      return <CartItem item={product} id={product.id} />;
    });
    // const productIds = Object.keys(cartItems);
    // //generating list of objects
    // const output = productIds.map((id) => {
    //   return <CartItem item={cartItems[id]} id={id} />;
    // });
    return (
      <Fragment>
        Cart Pagee
        {output}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    cartProducts: state.cartReducer.cartItems,
  };
};

export default connect(mapStateToProps, null)(Cart);
