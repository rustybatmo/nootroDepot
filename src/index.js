import React from "react";
import ReactDOM from "react-dom";

// import AppContainer from "./Containers/AppContainer";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// import store from "./store/store";
import AppContainer from "./Containers/AppContainer";
import logger from "redux-logger";

// import rootReducer from "../reducers/rootReducer";

import { combineReducers, applyMiddleware, createStore } from "redux";
import { createBrowserHistory } from "history";
import { routerReducer } from "./reducer";
import routerMiddleware from "./middleware";
import { startListener } from "./listener";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";

// import { startListener } from "./Routing/listener";
// import { push } from "../actions";

const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: routerReducer,
  userReducer,
});

// Build the middleware
const middleware = routerMiddleware(history);

// import cakeReducer from "../reducers/reducer";

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk, middleware, logger)
);
startListener(history, store);

// Now you can read location data from the store!
let currentLocation = store.getState().router.pathname;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
// You can also subscribe to changes in the location!
let unsubscribe = store.subscribe(() => {
  let previousLocation = currentLocation;
  currentLocation = store.getState().router.pathname;
  if (previousLocation !== currentLocation) {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </React.StrictMode>,
      document.getElementById("root")
    );
  }
});

// And you can dispatch navigation actions from anywhere!
// store.dispatch(push("/about"));

export default store;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
