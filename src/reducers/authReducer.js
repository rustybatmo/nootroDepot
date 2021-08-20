const initialState = {
  isLoggedIn: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        isLoggedIn: true,
      };
    default:
      return state;
  }
};
