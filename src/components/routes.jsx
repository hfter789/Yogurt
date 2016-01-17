import React from 'react';
import {Router, IndexRoute, Route, Link} from 'react-router';
import SiteJimmy from './SiteJimmy';
import ParallaxGallery from './ParallaxGallery';
import Root from './Root';
import JimmyNavigation from './JimmyNavigation';
import JimmyParallax from './JimmyParallax';

const routes = (
  <Route path="/" component={Root}>
    <Route path='jimmy' component={JimmyNavigation}>
      <IndexRoute component={SiteJimmy} />
      <Route path='about' component={JimmyParallax}/>
    </Route>
  </Route>
);

module.exports=routes;