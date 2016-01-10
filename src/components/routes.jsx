import React from 'react';
import {Router, IndexRoute, Route, Link} from 'react-router';
import SiteJimmy from './SiteJimmy';
import About from './About';
import Root from './Root';
import Home from './Home';

const routes = (
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />
    <Route path='jimmy' component={SiteJimmy}/>
    <Route path='jimmy/about' component={About}/>
  </Route>
);

module.exports=routes;