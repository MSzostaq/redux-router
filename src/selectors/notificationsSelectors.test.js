import { getNotifications } from "./notificationsSelectors";

describe("notifications selectors", () => {
  describe("getNotifications", () => {
    it("should get notifications", () => {
      const state = { notifications: [{ id: "1" }] };
      const expected = [{ id: "1" }];
      expect(getNotifications(state)).toEqual(expected);
    });
  });
});
