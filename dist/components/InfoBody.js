'use strict';

var _reactBootstrap = require('react-bootstrap');

var React = require('react');

var InfoBody = React.createClass({
  displayName: 'InfoBody',

  propTypes: {
    imagePath: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired
  },

  render: function render() {
    var title = this.props.title;
    return React.createElement(
      _reactBootstrap.Grid,
      { style: {
          padding: '30px',
          paddingTop: '100px',
          paddingBottom: '100px'
        } },
      React.createElement(
        _reactBootstrap.Row,
        { className: 'show-grid' },
        React.createElement(
          _reactBootstrap.Col,
          { xs: 12, md: 4, mdPush: 1, style: { padding: '0px' } },
          React.createElement(
            'div',
            { className: 'image-container' },
            React.createElement(_reactBootstrap.Image, { src: this.props.imagePath, thumbnail: true })
          )
        ),
        React.createElement(
          _reactBootstrap.Col,
          { xs: 12, md: 4, mdPush: 2 },
          React.createElement(
            'div',
            { className: 'text-container' },
            !!this.props.title ? React.createElement(
              'h2',
              { className: 'title' },
              this.props.title
            ) : null,
            React.createElement(
              'h5',
              null,
              'Full Stack Web Developer'
            ),
            React.createElement(
              'p',
              null,
              this.props.description
            ),
            React.createElement(
              _reactBootstrap.Button,
              { bsStyle: 'primary', bsSize: 'large' },
              'Readmore'
            )
          )
        )
      )
    );
  }
});

module.exports = InfoBody;