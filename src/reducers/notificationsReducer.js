import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from "actions/notificationsActions";

const initialState = [];

export default function notificationsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return [...state, action.payload];
    case REMOVE_NOTIFICATION:
      return state.filter(
        (notification) => notification.id !== action.payload.id
      );
    default:
      return state;
  }
}
