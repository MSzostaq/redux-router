import { delay, put, race, take, takeEvery } from "redux-saga/effects";
import {
  ADD_NOTIFICATION,
  CLOSE_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from "actions/notificationsActions";

function* onAddNotification(action) {
  const { id, lifespan } = action.payload;
  yield race([
    delay(lifespan, true),
    take((a) => a.type === CLOSE_NOTIFICATION && a.payload.id === id),
  ]);
  yield put({ type: REMOVE_NOTIFICATION, payload: { id } });
}

export default [takeEvery(ADD_NOTIFICATION, onAddNotification)];
