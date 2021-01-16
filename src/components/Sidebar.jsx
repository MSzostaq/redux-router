import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "./Button";
import GlobalContext from "../contexts/GlobalContext";
import Icon from "./Icon";

const StyledSidebar = styled(motion.div)`
  align-items: center;
  background-color: #000aff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
`;

const CloseButton = styled(Icon)`
  color: #bdbdbd;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 48px;
  height: 48px;
`;

const StyledButton = styled(Button)`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const Sidebar = () => {
  const { isMenuOpen, toggleMenu } = useContext(GlobalContext);
  return isMenuOpen ? (
    <StyledSidebar
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <CloseButton icon="close" onClick={() => toggleMenu(false)} />
      <StyledButton as={Link} to="/toggle">
        Day
      </StyledButton>
      <StyledButton as={Link} to="/other">
        Night
      </StyledButton>
      <StyledButton as={Link} to="/dropdown">
        Dropdown
      </StyledButton>
    </StyledSidebar>
  ) : null;
};

export default Sidebar;
