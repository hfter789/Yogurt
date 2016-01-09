'use strict';

var _reactRouter = require('react-router');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _SiteJimmy = require('./SiteJimmy');

var _SiteJimmy2 = _interopRequireDefault(_SiteJimmy);

var _About = require('./About');

var _About2 = _interopRequireDefault(_About);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_routes2.default, document.getElementById('content'));