import React from 'react';
import {Router, IndexRoute, Route, Link} from 'react-router';
import ParallaxGallery from './components/ParallaxGallery';
import Root from './components/Root';
import Navigation from './components/Navigation';
import SiteBody from './components/SiteBody';

const routes = (
  <Route path="/" component={Root}>
    <Route path='jimmy' component={Navigation} site='jimmy'>
      <IndexRoute component={SiteBody} site='jimmy'/>
      <Route path='about' component={ParallaxGallery} site='jimmy'/>
    </Route>
  </Route>
);

module.exports=routes;