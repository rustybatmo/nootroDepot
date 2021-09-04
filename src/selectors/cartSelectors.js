export const selectCartItems = (state) => {
  const { productReducer } = state;
  const productsObj = productReducer.entities.products;
  const productList = productReducer.list;
  const cartItems = [];

  productList.forEach((id) => {
    const productObj = productsObj[id];
    if (productObj.count !== 0) {
      cartItems.push(productObj);
    }
  });

  return cartItems;
};
