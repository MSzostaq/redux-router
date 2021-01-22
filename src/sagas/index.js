import { all } from "redux-saga/effects";
import notificationsSagas from "sagas/notificationsSagas";

export default function* rootSaga() {
  yield all([...notificationsSagas]);
}
