import { Router, Route } from 'react-router';
import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
var isNode = typeof module !== 'undefined' && module.exports

if (isNode) {
  module.exports = routes;
} else {
  render(routes, document.getElementById('content'));
}
