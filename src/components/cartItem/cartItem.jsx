import React from "react";

const CartItem = ({ item, id }) => {
  const { name, price, count } = item;
  return (
    <div>
      <img src="https://cdn11.bigcommerce.com/s-cebedmpn/images/stencil/100x100/products/1266/5112/AvailomPowderSPLASH3__64350.1628010690.jpg?c=2"></img>
      {name}
      {price}
      <div>id = {id}</div>
      <div>Count: {count}</div>
    </div>
  );
};

export default CartItem;
