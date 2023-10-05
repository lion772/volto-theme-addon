import React, { useState } from 'react';
import NavItem from './NavItem';
import { Dropdown, Icon, Label, Menu, Modal } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import DropdownContent from '../../../../../../../../components/theme/Modal/DropdownContent';

const NavItems = ({ items, lang }) => {
  const [isPanelOpen, setPanelOpen] = useState(false);

  return (
    <>
      <Menu secondary inverted>
        {items.map((item) => (
          <NavItem item={item} lang={lang} key={item.url} />
        ))}

        <NavLink
          to="topics"
          key="topics"
          className="item"
          activeClassName="active"
        >
          Topics
        </NavLink>
        <NavLink to="data" key="data" className="item" activeClassName="active">
          Data
        </NavLink>
        <NavLink to="news" key="News" className="item" activeClassName="active">
          News
        </NavLink>
        <NavLink
          to="/home-1/about"
          key="about"
          className="item"
          activeClassName="active"
          exact
        >
          About
        </NavLink>
      </Menu>

      <Menu secondary>
        <Menu.Item onClick={() => setPanelOpen(!isPanelOpen)}>News</Menu.Item>
      </Menu>
      {/*<DropdownContent open={isPanelOpen} onClose={() => setPanelOpen(false)} />*/}
    </>
  );
};

export default NavItems;
