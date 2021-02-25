import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const View = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
`;

const ModalWrapper = styled.div`
  background-color: #f8f8f8;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0 0.2);
  color: #000;
  display: flex;
  flex-direction-columns: 1fr 1fr;
  position: relative;
  width: 800px;
  height: 420px;
`;

function Modal1({ showModal, setShowModal }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <View onClick={closeModal} ref={modalRef}>
          <ModalWrapper showModal={showModal}></ModalWrapper>
        </View>
      ) : null}
    </>
  );
}

export default Modal1;
