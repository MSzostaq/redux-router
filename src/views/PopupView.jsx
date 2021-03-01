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

const StyledMenuToggle = styled(MenuToggle)`
  position: absolute;
  top: 0;
  left: 0;
`;

function PopupView() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <View>
        <StyledMenuToggle />
        <Container>
          <Button onClick={openModal} whileTap={{ scale: 0.95 }}>
            Popup
          </Button>
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

export default PopupView;
