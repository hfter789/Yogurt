import SiteJimmy from './SiteJimmy';
import About from './About';
import {Router, IndexRoute, Route, Link} from 'react-router';
import React from 'react';

const App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})

const Home = React.createClass({
  render() {
    return (
      <p>
        Home
      </p>
    )
  }
})



const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path='jimmy' component={SiteJimmy}/>
    <Route path='jimmy/about' component={About}/>
  </Route>
);

module.exports=routes;