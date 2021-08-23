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
    list: [1, 2],
  },
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

    // case UPDATE_PRODUCT: {
    //   const { entities = {}, list = [] } = payload;
    //   const { stateEntitity: entities, stateList: list } = state;

    //   const product = entities.product;
    //   const updatedEntities = { ...entities, product };
    // }

    default:
      return state;
  }
};
