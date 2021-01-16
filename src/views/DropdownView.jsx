import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import MenuToggle from "../components/MenuToggle";

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

function DropdownView({ dispatch }) {
  return (
    <View>
      <StyledMenuToggle />
      <Form></Form>
    </View>
  );
}

export default connect()(DropdownView);
