'use strict';

var _SiteJimmy = require('./SiteJimmy');

var _SiteJimmy2 = _interopRequireDefault(_SiteJimmy);

var _About = require('./About');

var _About2 = _interopRequireDefault(_About);

var _reactRouter = require('react-router');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _react2.default.createElement(
  _reactRouter.Router,
  null,
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/' },
    _react2.default.createElement(_reactRouter.Route, { path: 'jimmy', component: _SiteJimmy2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'jimmy/about', component: _About2.default })
  )
);

module.exports = routes;