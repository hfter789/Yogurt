import { Router, Route } from 'react-router';
import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';

if(typeof document !== 'undefined') {
  render(<Router routes={routes} history={createBrowserHistory()}/>, document.getElementById('content'));
}
