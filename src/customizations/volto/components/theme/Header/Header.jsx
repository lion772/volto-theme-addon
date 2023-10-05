/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { Component } from 'react';
import { Header as SemanticHeader, Segment, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Anontools,
  LanguageSelector,
  Logo,
  Navigation,
  SearchWidget,
} from '@plone/volto/components';

/**
 * Header component class.
 * @class Header
 * @extends Component
 */
class Header extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    token: PropTypes.string,
    pathname: PropTypes.string.isRequired,
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    token: null,
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */

  render() {
    const image =
      'https://images.unsplash.com/photo-1695624765339-4f2f018e2f4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
    return (
      <Segment basic className="header-wrapper" style={{ padding: '0px' }}>
        <SemanticHeader
          as="header"
          className="header"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '48vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
          }}
        >
          <Segment basic placeholder>
            <Grid>
              <Grid.Column width={3}>
                {/* Left-hand side with logo */}
                <div className="logo">
                  <Logo />
                </div>
              </Grid.Column>
              <Grid.Column width={9}>
                {/* Tabs or Navigation */}
                <Navigation pathname={this.props.pathname} />
              </Grid.Column>
            </Grid>
          </Segment>

          <Segment basic>
            <div className="tools-search-wrapper">
              <LanguageSelector />
              {!this.props.token && (
                <div className="tools">
                  <Anontools />
                </div>
              )}
              <div className="search">
                <SearchWidget />
                {/*<Input icon='search' placeholder='Search...' inverted />*/}
              </div>
            </div>
          </Segment>

          {/* Search bar */}
        </SemanticHeader>
      </Segment>
    );
  }
}

export default connect((state) => ({
  token: state.userSession.token,
}))(Header);
