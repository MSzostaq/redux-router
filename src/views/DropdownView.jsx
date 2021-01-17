import React, { useState } from "react";
import styled from "styled-components";
import MenuToggle from "../components/MenuToggle";
import Dropdown from "../components/Dropdown";

const View = styled.div`
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

const StyledDropdown = styled(Dropdown)`
  width: 200px;
`;

function DropdownView() {
  const [selectedValue, setSelectedValue] = useState(null);
  const items = [
    { id: "subaru", name: "Subaru" },
    { id: "bmw", name: "BMW" },
    { id: "porsche", name: "Porsche" },
  ];
  function onValueChange(value) {
    setSelectedValue(value);
  }
  return (
    <View>
      <StyledMenuToggle />
      <Form>
        <StyledDropdown
          items={items}
          value={selectedValue}
          onChange={onValueChange}
        />
      </Form>
    </View>
  );
}

export default DropdownView;
