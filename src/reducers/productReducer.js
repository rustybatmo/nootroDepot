import {
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_LIST,
} from "../actions/ActionConstants";

const initialState = {
  entities: {
    products: {
      1: {
        id: 1,
        name: "Racetam",
        price: "22.99$",
        count: 0,
      },
      2: {
        id: 2,
        name: "Vitamin D",
        price: "22.99$",
        count: 0,
      },
    },
  },
  list: [1, 2],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_PRODUCT_LIST: {
      const { entities, list } = payload;

      const updatedEntities = { ...entities };
      const updatedList = [...list];

      return {
        entities: updatedEntities,
        list: updatedList,
      };
    }

    case UPDATE_PRODUCT: {
      let stateEntity = state.entities;
      let stateList = state.list;

      let existingProducts = { ...stateEntity.products };

      let product = undefined;
      let list = undefined;

      {
        let { entities = {}, list = [] } = payload;
        product = entities.product;
        list = list;
      }
      // let newProduct = product[list[0]];

      // // let updatedProduct = {...existingProducts[newProduct.id], ...newProduct};
      // let updatedProduct = {
      //   ...existingProducts[newProduct.id],
      //   ...newProduct,
      // };

      // let updatedProducts = {
      //   ...existingProducts,
      //   [updatedProduct.id]: updatedProduct,
      // };

      // let updatedEntities = { ...stateEntity, products: updatedProducts };

      return {
        ...state,
        // entities: updatedEntities,
      };
    }

    default:
      return state;
  }
};
