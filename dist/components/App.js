'use strict';

var _reactRouter = require('react-router');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isNode = typeof module !== 'undefined' && module.exports;

if (isNode) {
  module.exports = _routes2.default;
} else {
  (0, _reactDom.render)(_routes2.default, document.getElementById('content'));
}