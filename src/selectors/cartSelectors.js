export const selectCartItems = (state) => {
  const { cartItems = [] } = state.cartReducer;

  return cartItems;
};
