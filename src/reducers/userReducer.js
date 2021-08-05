import { CREATE_USER } from "../actions/ActionConstants";

const initialState = {
  email: "",
  password: "",
  country: "",
  fname: "",
  lname: "",
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_USER:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default userReducer;
