import {
  addNotification,
  ADD_NOTIFICATION,
} from "actions/notificationsActions";

describe("notifications actions", () => {
  describe("addNotification", () => {
    it("should create an action to add notification", () => {
      const notification = {
        id: "1",
        type: "error",
        title: "Error",
        message: "Something went wrong!",
        lifespan: 10000,
      };
      const expectedAction = {
        type: ADD_NOTIFICATION,
        payload: {
          id: "1",
          type: "error",
          title: "Error",
          message: "Something went wrong!",
          lifespan: 10000,
        },
      };
      expect(addNotification(notification)).toEqual(expectedAction);
    });

    it("should set default values if not provided", () => {
      const notification = {};
      const { payload } = addNotification(notification);
      expect(typeof payload.id).toBe("string");
      expect(payload.type).toBe("ok");
      expect(payload.title).toBe("");
      expect(payload.message).toBe("");
      expect(payload.lifespan).toBe(5000);
    });
  });
});
