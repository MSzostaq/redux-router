import { all } from "redux-saga/effects";
import notificationsSagas from "./notificationsSagas";

export default function* rootSaga() {
  yield all([...notificationsSagas]);
}
