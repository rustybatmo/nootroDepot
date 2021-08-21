import React, { Fragment, useState } from "react";
import CartItem from "../../components/cartItem/cartItem";

// const Cart = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>Your Cart </h1>
//     </div>
//   );
// };

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: {},
    };
  }

  componentDidMount() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));

    this.setState({
      cartItems: cartItems,
    });
  }

  render() {
    const { cartItems } = this.state;
    const productIds = Object.keys(cartItems);

    //generating list of objects
    const output = productIds.map((id) => {
      return <CartItem item={cartItems[id]} id={id} />;
    });

    return (
      <Fragment>
        Cart Pagee
        {output}
      </Fragment>
    );
  }
}
export default Cart;
