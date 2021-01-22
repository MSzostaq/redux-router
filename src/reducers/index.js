import { combineReducers } from "redux";
import notificationsReducer from "reducers/notificationsReducer";

const rootReducer = combineReducers({
  notifications: notificationsReducer,
});

export default rootReducer;
