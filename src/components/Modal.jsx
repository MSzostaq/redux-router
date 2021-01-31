import { useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { v4 as uuidv4 } from "uuid";
import ModalsContext from "contexts/ModalsContext";

const Modal = ({ children, onClose }) => {
  const { onOpen, onDestroy } = useContext(ModalsContext);
  const [modalId] = useState(`Modal_${uuidv4()}`);
  const modalsRef = useRef(document.getElementById("modals"));

  useEffect(() => {
    onOpen({ id: modalId, onClose });
    return () => {
      onDestroy(modalId);
    };
  }, []);

  return createPortal(children, modalsRef.current);
};

export default Modal;
