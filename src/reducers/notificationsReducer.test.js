import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from "actions/notificationsActions";
import reducer from "reducers/notificationsReducer";

describe("notifications reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should handle ADD_NOTIFICATION", () => {
    const state = [];
    const action = {
      type: ADD_NOTIFICATION,
      payload: {
        id: "1",
        type: "error",
        title: "Error",
        message: "Something went wrong!",
        lifespan: 10000,
      },
    };
    const expectedState = [
      {
        id: "1",
        type: "error",
        title: "Error",
        message: "Something went wrong!",
        lifespan: 10000,
      },
    ];
    expect(reducer(state, action)).toEqual(expectedState);
  });

  it("should handle REMOVE_NOTIFICATION", () => {
    const state = [
      {
        id: "1",
        type: "error",
        title: "Error",
        message: "Something went wrong!",
        lifespan: 10000,
      },
    ];
    const action = {
      type: REMOVE_NOTIFICATION,
      payload: {
        id: "1",
      },
    };
    const expectedState = [];
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
