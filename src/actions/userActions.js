import { CREATE_USER } from "./ActionConstants";

// export const createUserThunk = (payload) => {
//   return (dispatch) => {
//     http.post("http://localhost:3000/users");
//   };
// };

const createUser = () => {
  return {
    type: CREATE_USER,
    payload: payload,
  };
};
