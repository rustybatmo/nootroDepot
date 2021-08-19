import { CREATE_USER } from "./ActionConstants";
import axios from "axios";

// export const createUserThunk = (payload) => {
//   return (dispatch) => {
//     console.log("This si the dispatch");
//     console.log(dispatch);
//     fetch("http://localhost:3000/users", {
//       method: "POST",
//       body: JSON.stringify({
//         title: "foo",
//         body: "bar",
//         userId: 10,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then(() => {
//         dispatch(createUser(payload));
//       })
//       .catch((err) => console.log("There has been an error"));
//   };
// };

// export const createUser = (payload) => {
//   console.log("This is the payload");
//   console.log(payload);

//   return {
//     type: CREATE_USER,
//     payload: payload,
//   };
// };

const createUserThunk = (userInfo) => {
  const { email, password, confirmPassword } = userInfo;
  console.log(email, password, confirmPassword);
  // return (dispatch) => {
  axios
    .post("http://localhost:5000/auth/register", {
      email,
      password,
      confirmPassword,
    })
    .then((res) => console.log("user added " + res.data));
  // };
};

export default createUserThunk;
