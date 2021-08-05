import { UPDATE_PRODUCT_LIST } from "../actions/ActionConstants";

const initialState = [
  {
    name: "piracetam",
    price: 100,
  },
];

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_PRODUCT_LIST:
      return [...payload];
    default:
      return state;
  }
};
