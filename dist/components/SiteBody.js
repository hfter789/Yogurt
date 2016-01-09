'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Navigation = require('./Navigation');
var InfoBody = require('./InfoBody');
var config = require('../../configs/config.json');

var SiteBody = React.createClass({
  displayName: 'SiteBody',

  propTypes: {
    site: React.PropTypes.string.isRequired
  },

  render: function render() {
    var site = this.props.site;
    var siteConfig = config[site];
    var path = siteConfig.coverImage;
    var galleryList = siteConfig.galleryList;
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'header-container' },
          React.createElement('div', { style: {
              width: '100%',
              height: '30px'
            } }),
          React.createElement(Navigation, { site: site, brand: siteConfig.title })
        ),
        React.createElement(InfoBody, {
          imagePath: siteConfig.selfy,
          title: siteConfig.title,
          description: siteConfig.description
        })
      )
    );
  }
});

module.exports = SiteBody;