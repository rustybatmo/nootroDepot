import { UPDATE_PRODUCT_LIST } from "./ActionConstants";

export const getProductsThunk = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((json) => {
        console.log("hey there");
        console.log(json);
        dispatch(productList(json));
      });
  };
};

const productList = (payload) => {
  console.log("These are the products");
  console.log(payload);
  return {
    type: UPDATE_PRODUCT_LIST,
    payload: payload,
  };
};
