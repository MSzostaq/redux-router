import React, { useEffect, useState } from "react";
import GlobalContext from "contexts/GlobalContext";

const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({ isMenuOpen: false });

  function toggleMenu(value) {
    setState((prevState) => ({
      ...prevState,
      isMenuOpen: value !== undefined ? value : !prevState.isMenuOpen,
    }));
  }

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      toggleMenu,
    }));
  }, [state.isMenuOpen]);

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
