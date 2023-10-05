import React from 'react';
import { NavLink } from 'react-router-dom';
import { isInternalURL, toBackendLang } from '@plone/volto/helpers';
import config from '@plone/volto/registry';
import { Dropdown, Menu, Segment } from 'semantic-ui-react';

const NavItem = ({ item, lang }) => {
  const { settings } = config;
  // The item.url in the root is ''
  // TODO: make more consistent it everywhere (eg. reducers to return '/' instead of '')
  if (isInternalURL(item.url) || item.url === '') {
    return (
      <NavLink
        to={item.url === '' ? '/' : item.url}
        key={item.url}
        className="item"
        activeClassName="active"
        exact={
          settings.isMultilingual
            ? item.url === `/${toBackendLang(lang)}`
            : item.url === ''
        }
      >
        {item.title}
      </NavLink>
    );
  } else {
    return (
      <a
        href={item.url}
        key={item.url}
        className="item"
        rel="noopener noreferrer"
        target={settings.openExternalLinkInNewTab ? '_blank' : '_self'}
      >
        {item.title}
      </a>
    );
  }
};

export default NavItem;
