import React, { useState } from "react";
import styled from "styled-components";
import Button from "components/Button";
import MenuToggle from "components/MenuToggle";
import Modal from "components/Modal";
import Popup from "popups/Popup";

const View = styled.div`
  background-color: #f9f9f9;
  height: 100%;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const StyledButton = styled(Button)`
  background-color: #141414;
  border-radius: 4px;
  color: #fff;
  font-size: 24px;
`;

const StyledMenuToggle = styled(MenuToggle)`
  position: absolute;
  top: 0;
  left: 0;
`;

function ModalView() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <View>
        <StyledMenuToggle />
        <Container>
          <StyledButton onClick={openModal}>Popup</StyledButton>
          {showModal && (
            <Modal>
              <Popup onClose={() => setShowModal(false)} />
            </Modal>
          )}
        </Container>
      </View>
    </>
  );
}

export default ModalView;
