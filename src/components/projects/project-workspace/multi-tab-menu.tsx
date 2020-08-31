import React, { FC, Fragment, useState } from 'react';
import styled from 'styled-components';

interface TabItem {
  image: string;
  displayName: string;
}

interface MultiTabMenuProps {
  tabs: string[];
  tabItems?: TabItem[];
}

const MenuItems = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div<{ active: boolean }>`
  border-bottom: ${(props) => (props.active ? '1px solid #000000;' : 'none;')};
  padding-bottom: 1px;
  cursor: pointer;
  font-weight: 600;
`;

export const MultiTabMenu: FC<MultiTabMenuProps> = (props) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const handleItemClick = (index: number) => {
    setActiveItemIndex(index);
  };

  return (
    <Fragment>
      <MenuItems data-testid="menu-items">
        {props.tabs?.map((item, index) => {
          return (
            <Item
              active={index === activeItemIndex}
              key={index}
              onClick={() => handleItemClick(index)}
            >
              {item}
            </Item>
          );
        })}
      </MenuItems>
      <hr></hr>
    </Fragment>
  );
};
