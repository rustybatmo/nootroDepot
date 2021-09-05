import React from "react";
import composedWithCounter from "../../HOC/withCounter";
import { useState } from "react";

const CartItem = ({ item, count, handleClick }) => {
  const { name, price, id } = item;
  // debugger
  const updatedPrice = (price * count)
  return (
    <div>
      <img src="https://cdn11.bigcommerce.com/s-cebedmpn/images/stencil/100x100/products/1266/5112/AvailomPowderSPLASH3__64350.1628010690.jpg?c=2"></img>
      {name}
      {price}
      <div>id = {id}</div>
      <div>Count: {count}</div>
      <div>Price : {updatedPrice}</div>
      <div>
      <button name = "+" onClick = {handleClick}> + </button>  {count} <button name = "-" onClick = {handleClick}> - </button>
      </div>
    </div>
  );
};

export default composedWithCounter(CartItem);
