import React, { useContext, useState } from "react";
import styled from "styled-components";
import GlobalContext from "../contexts/GlobalContext";
import MenuToggle from "../components/MenuToggle";
import Toggle from "../components/Toggle";

const View = styled.div`
  background-color: #404040;
  height: 100%;
  position: relative;
`;

const StyledMenuToggle = styled(MenuToggle)`
  position: absolute;
  top: 0;
  left: 0;
`;

const Form = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

function OtherView() {
  const { addNotification } = useContext(GlobalContext);
  const [value, setValue] = useState(false);
  function onValueChange(newValue) {
    setValue(newValue);
    const notification = {
      type: newValue ? "ok" : "error",
      title: `Toggle switched ${newValue ? "on" : "off"}`,
      message: `This is ${newValue ? "good" : "bad"}.`,
    };
    addNotification(notification);
  }

  return (
    <View>
      <StyledMenuToggle />
      <Form>
        <Toggle size="jumbo" value={value} onChange={onValueChange} />
      </Form>
    </View>
  );
}

export default OtherView;
