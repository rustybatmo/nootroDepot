import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

import { combineReducers, applyMiddleware, createStore } from "redux";
import { createBrowserHistory } from "history";
import { routerReducer } from "../reducer";
import { routerMiddleware } from "../middleware";
// import { startListener } from "../listener";
import { push } from "../actions";
import { startListener } from "../listener";

const history = createBrowserHistory();

const rootReducer = combineReducers({ router: routerReducer });
// Build the middleware
const middleware = routerMiddleware(history);

// import cakeReducer from "../reducers/reducer";

const store = createStore(rootReducer, {}, applyMiddleware(middleware));
startListener(history, store);

export default store;
