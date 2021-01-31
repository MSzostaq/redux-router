import React, { useRef, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { SizeMe } from "react-sizeme";
import { motion } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import Icon from "components/Icon";
import Modal from "components/Modal";

const ToggleButton = styled.button`
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  display: flex;
  color: #636363;
  font-size: 14px;
  font-weight: bold;
  line-height: 40px;
  padding: 0 8px;
  text-align: left;
  width: 100%;
  height: 40px;
`;

const Prompt = styled.p`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CaretIcon = styled(Icon)`
  color: #bdbdbd;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
`;

const Items = styled(motion.ul)`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: absolute;
  width: 200px;
`;

const Item = styled.li`
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  padding: 10px 8px;
  ${({ selected }) =>
    selected &&
    `background-color: #1ad1c2;
    color: #fff;`}
`;

function Dropdown({ className, items, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownId] = useState(`Dropdown_${uuidv4()}`);
  const toggleButtonRef = useRef(null);

  function getItemById(id) {
    return items.find((item) => item.id === id);
  }

  function onToggleButtonClick() {
    setIsOpen(!isOpen);
  }

  function onClose() {
    setIsOpen(false);
  }

  function getItemsStyle(size) {
    const {
      offsetWidth: toggleButtonWidth,
      offsetHeight: toggleButtonHeight,
    } = toggleButtonRef.current;
    const {
      top: toggleButtonTop,
      left,
    } = toggleButtonRef.current.getBoundingClientRect();
    const { height = Math.min(items.length * 40, 200) } = size;
    let top = toggleButtonHeight + toggleButtonTop;
    if (top + height > window.innerHeight) {
      top = top - height - toggleButtonHeight;
    }
    return { width: toggleButtonWidth, top, left };
  }

  function onClickOutside({ target }) {
    let isOwnToggle = false;
    let currentElement = target;
    do {
      if (currentElement.dataset) {
        isOwnToggle = currentElement.dataset.dropdownToggle === dropdownId;
      }
      currentElement = currentElement.parentNode;
    } while (!isOwnToggle && currentElement);

    if (isOwnToggle) {
      return;
    }
    setIsOpen(false);
  }

  function onItemClick(item) {
    onChange(item.id);
    setIsOpen(false);
  }

  return (
    <>
      <ToggleButton
        ref={toggleButtonRef}
        className={className}
        data-dropdown-toggle={dropdownId}
        onClick={onToggleButtonClick}
      >
        <Prompt>{value ? getItemById(value).name : "Select item..."}</Prompt>
        <CaretIcon icon="caretDown" />
      </ToggleButton>
      {isOpen && (
        <Modal onClose={onClose}>
          <OutsideClickHandler onOutsideClick={onClickOutside}>
            <SizeMe monitorHeight noPlaceholder>
              {({ size }) => (
                <Items
                  style={getItemsStyle(size)}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "tween", duration: 0.2, ease: "circOut" }}
                >
                  {items.map((item) => (
                    <Item
                      key={item.id}
                      selected={item.id === value}
                      onClick={() => {
                        onItemClick(item);
                      }}
                    >
                      {item.name}
                    </Item>
                  ))}
                </Items>
              )}
            </SizeMe>
          </OutsideClickHandler>
        </Modal>
      )}
    </>
  );
}

export default Dropdown;
