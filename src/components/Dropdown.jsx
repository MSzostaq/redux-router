import React, { useState } from "react";
import styled from "styled-components";
import Icon from "components/Icon";

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

const Items = styled.ul`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: absolute;
  top: 40px;
  width: 200px;
`;

const Item = styled.li`
  cursor: pointer;
  font-size: 14px;
  line-heihght: 20px;
  padding: 10px 8px;
  ${({ selected }) =>
    selected &&
    `background-color: #1ad1c2;
    color: #fff;`}
`;

function Dropdown({ className, items, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);

  function getItemById(id) {
    return items.find((item) => item.id === id);
  }

  function onToggleButtonClick() {
    setIsOpen(!isOpen);
  }

  function onItemClick(item) {
    onChange(item.id);
  }
  return (
    <>
      <ToggleButton className={className} onClick={onToggleButtonClick}>
        <Prompt>{value ? getItemById(value).name : "Select item..."}</Prompt>
        <CaretIcon icon="caretDown" />
      </ToggleButton>
      <Items>
        {isOpen &&
          items.map((item) => (
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
    </>
  );
}

export default Dropdown;
