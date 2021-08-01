import {
  GO,
  GO_BACK,
  GO_FORWARD,
  LOCATION_CHANGE,
  PUSH,
  REPLACE,
} from "./constants";

export const push = (href) => ({ type: PUSH, payload: href });

export const replace = (href) => ({ type: REPLACE, payload: href });

export const go = (index) => ({ type: GO, payload: index });

export const goBack = () => ({ type: GO_BACK });

export const goForward = () => ({ type: GO_FORWARD });

//history listener that responds to navigation by dispatching a new action containing the new location information.

export const locationChange = ({ pathname, search, hash }) => ({
  type: LOCATION_CHANGE,
  payload: { pathname, search, hash },
});
