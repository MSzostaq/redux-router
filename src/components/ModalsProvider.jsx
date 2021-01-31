import React, { useEffect, useState } from "react";
import ModalsContext from "contexts/ModalsContext";

const ModalsProvider = ({ children }) => {
  const [state, setState] = useState({ modals: [] });

  function onOpen(modal) {
    setState((prevState) => ({
      ...prevState,
      modals: [...prevState.modals, modal],
    }));
  }

  function onClose() {
    const { modals } = state;
    const topModal = modals[modals.length - 1];
    topModal.onClose();
  }

  function onDestroy(modalId) {
    setState((prevState) => ({
      ...prevState,
      modals: prevState.modals.filter((modal) => modal.id !== modalId),
    }));
  }

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      onOpen,
      onClose,
      onDestroy,
    }));
  }, [state.modals]);

  return (
    <ModalsContext.Provider value={state}>{children}</ModalsContext.Provider>
  );
};

export default ModalsProvider;
