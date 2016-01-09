import SiteJimmy from './SiteJimmy';
import About from './About';
import {Router, Route} from 'react-router';
import React from 'react';

const routes = (
  <Router>
    <Route path='/'>
      <Route path='jimmy' component={SiteJimmy}/>
      <Route path='jimmy/about' component={About}/>
    </Route>
  </Router>
);

module.exports=routes;