import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import { reduxRouter } from "redux-router-middleware";

// import cakeReducer from "../reducers/reducer";

const store = createStore(rootReducer);

export default store;
