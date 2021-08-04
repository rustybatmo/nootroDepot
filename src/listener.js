// import { locationChange } from "./actions";

import { locationChange } from "./actions";

export function startListener(history, store) {
  console.log("Fisrt time");
  store.dispatch(
    locationChange({
      pathname: history.location.pathname,
      search: history.location.search,
      hash: history.location.hash,
    })
  );
  history.listen((info) => {
    const { location } = info;
    console.log("Change before happening");
    console.log(location);
    console.log("After happening");

    store.dispatch(
      locationChange({
        pathname: location.pathname,
        search: location.search,
        hash: location.hash,
      })
    );
  });
}
