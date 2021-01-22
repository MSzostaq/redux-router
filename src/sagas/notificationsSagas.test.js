import { expectSaga } from "redux-saga-test-plan";
import saga from "sagas";
import {
  ADD_NOTIFICATION,
  CLOSE_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from "actions/notificationsActions";

describe("notifications sagas", () => {
  describe("onAddNotification", () => {
    it("should remove notification on timeout", () => {
      const action = {
        type: ADD_NOTIFICATION,
        payload: {
          id: "1",
          lifespan: 0,
        },
      };
      return expectSaga(saga)
        .put({
          type: REMOVE_NOTIFICATION,
          payload: { id: "1" },
        })
        .dispatch(action)
        .silentRun();
    });

    it("should remove notification on close", () => {
      const action = {
        type: ADD_NOTIFICATION,
        payload: {
          id: "1",
        },
      };
      return expectSaga(saga)
        .put({
          type: REMOVE_NOTIFICATION,
          payload: { id: "1" },
        })
        .dispatch(action)
        .dispatch({ type: CLOSE_NOTIFICATION, payload: { id: "1" } })
        .silentRun();
    });
  });
});
