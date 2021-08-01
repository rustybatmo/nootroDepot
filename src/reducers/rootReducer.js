const initialState = {
  noOfCakes: 10,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "BUY_CAKES":
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    default:
      return state;
  }
};

export default rootReducer;
