import { ADD_CART_ITEMS } from "../actions/ActionConstants";

const initialState = {
  cartItems: [
    {
      id: 1,
      name: "Racetam",
      price: "22.99$",
      count: 0,
    },
  ],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CART_ITEMS: {
      const existingCartItems = [...state.cartItems];
      const { name, price, id, count } = payload;

      const isItemExists = existingCartItems.find((item) => item.id === id);

      if (isItemExists) {
        return {
          ...state,
        };
      }
      existingCartItems.push(payload);
      return {
        ...state,
        cartItems: existingCartItems,
      };
      break;
    }
    default:
      return {
        ...state,
      };
  }
};
