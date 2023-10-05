/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import {
  Container,
  List,
  Grid,
  Header,
  Icon,
  Segment,
} from 'semantic-ui-react';
import { map } from 'lodash';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import { useSelector, shallowEqual } from 'react-redux';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL, addAppURL } from '@plone/volto/helpers';
import { Link } from 'react-router-dom';

const messages = defineMessages({
  copyright: {
    id: 'Copyright',
    defaultMessage: 'Copyright',
  },
});

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string|null} Markup of the component
 */
const Footer = ({ intl }) => {
  const { siteActions = [] } = useSelector(
    (state) => ({
      siteActions: state.actions?.actions?.site_actions,
    }),
    shallowEqual,
  );

  return (
    <Segment
      inverted
      style={{ margin: '0', padding: '3em' }}
      className="discreet"
    >
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="About" />
              <p>
                Your footer content and information about your website or
                organization can go here.
              </p>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="Social Media" />
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Icon name="facebook" size="big" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Icon name="twitter" size="big" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" size="big" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Icon name="instagram" size="big" />
              </a>
              {/* Add more social media icons as needed */}
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="Contact Us" />
              <p>Email: contact@example.com</p>
              <p>Phone: +123 456 7890</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  /**
   * i18n object
   */
};

export default injectIntl(Footer);
