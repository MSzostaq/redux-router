import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";

function configureStore() {
  return createStore(rootReducer, composeWithDevTools());
}

const store = configureStore();

export default store;
