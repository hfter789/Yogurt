'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./components/routes');

var _routes2 = _interopRequireDefault(_routes);

var _reactRouter = require('react-router');

var _server = require('react-dom/server');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var template = _fs2.default.readFileSync(_path2.default.join(__dirname, '../public/serverTemplate.html'), 'utf8');

app.all('*', function (req, res, next) {
  console.log(req.method, req.url);
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var data = {};
      data.body = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RoutingContext, renderProps));
      var compiled = _lodash2.default.template(template);
      res.status(200).send(compiled(data));
    } else {
      next();
    }
  });
});

app.use(_express2.default.static('public'));
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});