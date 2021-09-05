import "./productBox.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import withCounter from "../../HOC/withCounter";
import composedWithCounter from "../../HOC/withCounter";
import { addCartItem } from "../../actions/cartActions";

const ProductBox = ({ name, price, id, count }) => {
  const dispatch = useDispatch();

  const [buttonContent, setButtonContent] = useState("Add item to cart");

  const handleClick = () => {
    setButtonContent("Item added");
    const obj = {
      name,
      price,
      id,
      count: count + 1,
    };
    dispatch(addCartItem(obj));
  };
  return (
    <div className="product-card">
      <img
        className="card-image"
        src="https://cdn11.bigcommerce.com/s-cebedmpn/images/stencil/532x532/products/1271/4928/ReducedL-GlutathionePowderSPLASH__99264.1620857669.jpg?c=2"
      ></img>
      <div className="title">{name}</div>
      <div>{price}</div>
      <button onClick={handleClick}>{buttonContent}</button>
    </div>
  );
};

export default ProductBox;
