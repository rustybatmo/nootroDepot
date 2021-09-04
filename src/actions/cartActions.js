import { ADD_CART_ITEMS } from "./ActionConstants";

export const addCartItem = (payload) => {
  return {
    type: ADD_CART_ITEMS,
    payload: payload,
  };
};
