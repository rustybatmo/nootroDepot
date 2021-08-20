import { UPDATE_PRODUCT_LIST } from "./ActionConstants";

export const getProductsThunk = () => {
  return (dispatch) => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((json) => {
        dispatch(productList(json));
      });
  };
};

const productList = (payload) => {
  return {
    type: UPDATE_PRODUCT_LIST,
    payload: payload,
  };
};
