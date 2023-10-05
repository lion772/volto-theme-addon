/** @import { FC } from 'react' */
import { Accordion, Icon, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import Navigation from '../Navigation';
import React, { useState } from 'react';

/** @type {FC<{ pathname: string, open: boolean }>} */
const Navbar = ({ pathname, open }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e, titleProps) => {
    setActiveIndex(activeIndex === titleProps.index ? -1 : titleProps.index);
  };

  return (
    <aside className="site_navbar" data-open={open} id="navbar">
      <Segment basic>
        <Navigation pathname={pathname} />
      </Segment>
      <Segment basic className={'segment-solrcollection'}>
        <Accordion>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            Fachbereiche
          </Accordion.Title>
          <Accordion.Content
            active={activeIndex === 0}
            className="accordion-content"
          >
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </Accordion.Content>
        </Accordion>
      </Segment>
      <Segment basic className={'segment-solrcollection'}>
        <Accordion>
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            Kollektionen
          </Accordion.Title>
          <Accordion.Content
            className="accordion-content"
            active={activeIndex === 1}
          >
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </Accordion.Content>
        </Accordion>
      </Segment>
      <Segment basic className={'segment-solrcollection'}>
        <Accordion>
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={handleClick}
          >
            <Icon name="dropdown" />
            Favoriten
          </Accordion.Title>
          <Accordion.Content
            className="accordion-content"
            active={activeIndex === 2}
          >
            <Bookmarks />
          </Accordion.Content>
        </Accordion>
      </Segment>
    </aside>
  );
};

export default connect((state, props) => ({
  // ONLY NEEDED when USED to get data from state here
  // pathname: props.pathname,
  userId: state.userSession.token ? jwtDecode(state.userSession.token).sub : '',
}))(Navbar);
