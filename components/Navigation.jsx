var React = require('react');
import {Nav, NavItem, Navbar} from 'react-bootstrap';

var Navigation = React.createClass({
  render: function() {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Home</NavItem>
            <NavItem eventKey={2} href="#">About Me</NavItem>
            <NavItem eventKey={2} href="#">Projects</NavItem>
            <NavItem eventKey={2} href="#">Contact Me</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

module.exports = Navigation;