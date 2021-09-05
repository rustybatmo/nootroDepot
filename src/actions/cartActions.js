import { ADD_CART_ITEMS, UPDATE_CART_ITEM } from "./ActionConstants";

export const addCartItem = (payload) => {
  return {
    type: ADD_CART_ITEMS,
    payload: payload,
  };
};

export const updateCartItem = (payload) => {
  return {
    type: UPDATE_CART_ITEM,
    payload: payload,
  };
};
