import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/_rootReducer"
import thunk from "redux-thunk";


function addPromiseThunkSupport(store) {
  const dispatch = store.dispatch;
  return action => {
    if (typeof action.then === "function") {
      return action.then(dispatch);
    } else if (typeof action === "function") {
      return action(dispatch);
    }
    return dispatch(action);
  };
}

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk
  )
);

store.dispatch = addPromiseThunkSupport(store);

export default store;
