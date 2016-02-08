import React from 'react';
import {Router, IndexRoute, Route, Link} from 'react-router';
import ParallaxGallery from './ParallaxGallery';
import Root from './Root';
import Navigation from './Navigation';
import SiteBody from './SiteBody';

const routes = (
  <Route path="/" component={Root}>
    <Route path='jimmy' component={Navigation} site='jimmy'>
      <IndexRoute component={SiteBody} site='jimmy'/>
      <Route path='about' component={ParallaxGallery} site='jimmy'/>
    </Route>
  </Route>
);

module.exports=routes;