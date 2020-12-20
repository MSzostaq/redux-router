import { v4 as uuidv4 } from "uuid";

export const ADD_NOTIFICATION = "ADD_NOTIFICATION";
export const addNotification = ({
  id = uuidv4(),
  type = "ok",
  title = "",
  message = "",
  lifespan = 5000,
}) => ({
  type: ADD_NOTIFICATION,
  payload: { id, type, title, message, lifespan },
});
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";
export const CLOSE_NOTIFICATION = "CLOSE_NOTIFICATION";
