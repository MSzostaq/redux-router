import React, { useState } from "react";
import styled from "styled-components";
import Button from "components/Button";
import MenuToggle from "components/MenuToggle";

const View = styled.div`
  height: 100%;
  position: relative;
`;

const StyledMenuToggle = styled(MenuToggle)`
  position: absolute;
  top: 0;
  left: 0;
`;

function ModalView() {
  return (
    <View>
      <StyledMenuToggle />
    </View>
  );
}

export default ModalView;
