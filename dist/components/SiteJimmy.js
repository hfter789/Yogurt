'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SiteBody = require('./SiteBody');

var _SiteBody2 = _interopRequireDefault(_SiteBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SiteJimmy = _react2.default.createClass({
  displayName: 'SiteJimmy',
  render: function render() {
    return _react2.default.createElement(_SiteBody2.default, { site: 'jimmy' });
  }
});

module.exports = SiteJimmy;