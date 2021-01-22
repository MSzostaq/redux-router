import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "contexts/GlobalContext";
import Icon from "components/Icon";

const ToggleButton = styled.button`
  color: #bdbdbd;
  width: 64px;
  height: 64px;
`;

const ToggleButtonIcon = styled(Icon)`
  width: 48px;
  height: 48px;
`;

function MenuToggle({ className }) {
  const { toggleMenu } = useContext(GlobalContext);
  function onToggleButtonClick() {
    toggleMenu(true);
  }
  return (
    <ToggleButton className={className} onClick={onToggleButtonClick}>
      <ToggleButtonIcon icon="menu" />
    </ToggleButton>
  );
}

export default MenuToggle;
