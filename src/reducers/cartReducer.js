import {
  ADD_CART_ITEMS,
  GET_TOTAL_PRICE,
  UPDATE_CART_ITEM,
} from "../actions/ActionConstants";

const initialState = {
  cartItems: [
    {
      id: 1,
      name: "Racetam",
      price: "22.99",
      count: 0,
    },
  ],
  totalPrice: 0,
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CART_ITEMS: {
      const existingCartItems = [...state.cartItems];

      const { name, price, id, count } = payload;
      const updatedPrice = parseFloat(state.totalPrice) + parseFloat(price);

      const isItemExists = existingCartItems.find((item) => item.id === id);

      if (isItemExists) {
        const updatedCartItemsNewCount = existingCartItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              count: item.count + 1,
            };
          }
          return item;
        });
        return {
          ...state,
          totalPrice: updatedPrice,
          cartItems: updatedCartItemsNewCount,
        };
      }
      existingCartItems.push(payload);
      return {
        ...state,
        totalPrice: updatedPrice,
        cartItems: existingCartItems,
      };
    }
    case UPDATE_CART_ITEM: {
      const { id, count, price, operator } = payload;
      let updatedPrice;

      const existingCartItems = [...state.cartItems];
      if (operator === "+") {
        updatedPrice = parseFloat(state.totalPrice) + parseFloat(price);
      } else {
        updatedPrice = parseFloat(state.totalPrice) - parseFloat(price);
      }

      const updatedCartItems = existingCartItems.map((item) => {
        if (payload.id === item.id) {
          const updatedItem = {
            ...item,
            count,
          };
          return updatedItem;
        }
        return item;
      });

      return {
        ...state,
        totalPrice: updatedPrice,
        cartItems: updatedCartItems,
      };
    }

    case GET_TOTAL_PRICE: {
      const { cartItems, existingPrice: totalPrice } = this.state;
      let sum;
      const updatedPrice = cartItems.reduce(
        sum,
        (item) => item.price * item.count + sum
      );
      return {
        ...state,
        totalPrice: updatedPrice,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
