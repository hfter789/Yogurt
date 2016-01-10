import React from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = React.createClass({
  propTypes: {
    site: React.PropTypes.string.isRequired,
    brand: React.PropTypes.string
  },

  renderBrand() {
    if (this.props.brand) {
      return (
          <Navbar.Brand>
            <a href='#' style={{
              fontFamily: 'cursive'
            }}>{this.props.brand}</a>
          </Navbar.Brand>
      );
    }
  },

  renderNavItems() {
    return (
      <Nav>
        <LinkContainer to={'/' + this.props.site}>
          <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
        <LinkContainer to={'/' + this.props.site + '/about'}>
          <NavItem eventKey={2}>About Me</NavItem>
        </LinkContainer>
        <NavItem eventKey={2} href='#'>Projects</NavItem>
        <NavItem eventKey={2} href='#'>Contact Me</NavItem>
      </Nav>
    );
  },

  render: function() {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          { this.renderBrand() }
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            { this.renderNavItems() }
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

module.exports = Navigation;