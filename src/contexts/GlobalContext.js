import { createContext } from "react";

const GlobalContext = createContext({
  isMenuOpen: false,
  toggleMenu: () => {},
});

export default GlobalContext;
