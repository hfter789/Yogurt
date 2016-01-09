'use strict';

var _reactBootstrap = require('react-bootstrap');

var React = require('react');

var Navigation = React.createClass({
  displayName: 'Navigation',

  propTypes: {
    site: React.PropTypes.string.isRequired,
    brand: React.PropTypes.string
  },

  renderBrand: function renderBrand() {
    if (this.props.brand) {
      return React.createElement(
        _reactBootstrap.Navbar.Brand,
        null,
        React.createElement(
          'a',
          { href: '#', style: {
              fontFamily: 'cursive'
            } },
          this.props.brand
        )
      );
    }
  },

  render: function render() {
    return React.createElement(
      _reactBootstrap.Navbar,
      { inverse: true, fixedTop: true },
      React.createElement(
        _reactBootstrap.Navbar.Header,
        null,
        this.renderBrand(),
        React.createElement(_reactBootstrap.Navbar.Toggle, null)
      ),
      React.createElement(
        _reactBootstrap.Navbar.Collapse,
        null,
        React.createElement(
          _reactBootstrap.Nav,
          null,
          React.createElement(
            _reactBootstrap.NavItem,
            { eventKey: 1, href: '/' + this.props.site },
            'Home'
          ),
          React.createElement(
            _reactBootstrap.NavItem,
            { eventKey: 2, href: '/' + this.props.site + '/about' },
            'About Me'
          ),
          React.createElement(
            _reactBootstrap.NavItem,
            { eventKey: 2, href: '#' },
            'Projects'
          ),
          React.createElement(
            _reactBootstrap.NavItem,
            { eventKey: 2, href: '#' },
            'Contact Me'
          )
        )
      )
    );
  }
});

module.exports = Navigation;