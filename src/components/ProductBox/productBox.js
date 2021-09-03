import "./productBox.css";
import { useState, useDispatch } from "react";
import withCounter from "../../HOC/withCounter";
import composedWithCounter from "../../HOC/withCounter";

const ProductBox = ({ name, price, id, handleClick, count }) => {
  return (
    <div className="product-card">
      <img
        className="card-image"
        src="https://cdn11.bigcommerce.com/s-cebedmpn/images/stencil/532x532/products/1271/4928/ReducedL-GlutathionePowderSPLASH__99264.1620857669.jpg?c=2"
      ></img>
      <div className="title">{name}</div>
      <div>{price}</div>
      <div>
        {" "}
        <button name="-" onClick={handleClick}>
          {" "}
          -{" "}
        </button>{" "}
        {count}
        <button name="+" onClick={handleClick}>
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
};

export default composedWithCounter(ProductBox);
