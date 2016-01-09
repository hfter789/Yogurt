var React = require('react');
import {Nav, NavItem, Navbar} from 'react-bootstrap';

var Navigation = React.createClass({
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

  render: function() {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          { this.renderBrand() }
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href={'/' + this.props.site}>Home</NavItem>
            <NavItem eventKey={2} href={'/' + this.props.site + '/about'}>About Me</NavItem>
            <NavItem eventKey={2} href='#'>Projects</NavItem>
            <NavItem eventKey={2} href='#'>Contact Me</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

module.exports = Navigation;