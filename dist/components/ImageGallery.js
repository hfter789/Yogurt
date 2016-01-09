'use strict';

var _reactBootstrap = require('react-bootstrap');

var React = require('react');
var classnames = require('classnames');

var ImageGallery = React.createClass({
  displayName: 'ImageGallery',

  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  render: function render() {
    var slides = [];
    this.props.items.map(function (item, index) {
      var slide = React.createElement(
        _reactBootstrap.CarouselItem,
        null,
        React.createElement('img', { width: 900, height: 500, src: item.original, style: {
            margin: '0 auto'
          } }),
        React.createElement(
          'div',
          {
            className: 'carousel-caption' },
          React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              null,
              item.description
            )
          )
        )
      );
      slides.push(slide);
    });
    return React.createElement(
      _reactBootstrap.Carousel,
      null,
      slides
    );
  }
});

module.exports = ImageGallery;