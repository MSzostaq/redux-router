import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ESC } from "constants/keys";
import ModalsContext from "contexts/ModalsContext";

const StyledModals = styled.div`
  position: absolute;
  top: 0;
`;

const Modals = () => {
  const { modals, onClose } = useContext(ModalsContext);

  function onKeyDown(e) {
    if (e.keyCode === ESC && modals.length) {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [modals, onClose]);

  return <StyledModals id="modals" />;
};

export default Modals;
