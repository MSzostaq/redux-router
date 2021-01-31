import { createContext } from "react";

const ModalsContext = createContext({
  modals: [],
  onOpen: () => {},
  onClose: () => {},
  onDestroy: () => {},
});

export default ModalsContext;
