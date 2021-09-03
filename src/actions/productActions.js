import { normalise, normaliseArray } from "../util/normalizr";
import { UPDATE_PRODUCT, UPDATE_PRODUCT_LIST } from "./ActionConstants";

export const getProductsThunk = () => {
  return (dispatch) => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((json) => {
        const normalisedData = normaliseArray(json);

        dispatch(productList(normalisedData));
      });
  };
};

const productList = (payload) => {
  let newPayload = {
    entities: payload.entities,
    list: payload.result,
  };

  return {
    type: UPDATE_PRODUCT_LIST,
    payload: newPayload,
  };
};

export const updateProduct = (payload) => {
  const { entities, result } = normalise(payload);
  let newPayload = {
    entities,
    list: result,
  };
  console.log(newPayload);
  console.log("Is it getting called");

  return {
    type: UPDATE_PRODUCT,
    payload: newPayload,
  };
};
