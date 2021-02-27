import React, { useState } from "react";
import styled from "styled-components";
import Button from "components/Button";
import MenuToggle from "components/MenuToggle";
import Popup from "components/Popup";

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
          <StyledButton onClick={openModal}>Modal</StyledButton>
          <Popup showModal={showModal} setShowModal={setShowModal} />
        </Container>
      </View>
    </>
  );
}

export default ModalView;
