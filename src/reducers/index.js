import { combineReducers } from "redux";
import notificationsReducer from "./notificationsReducer";

const rootReducer = combineReducers({
  notifications: notificationsReducer,
});

export default rootReducer;
