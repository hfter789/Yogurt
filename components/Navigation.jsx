var React = require('react');
var NavItem = require('./NavItem');

var Navigation = React.createClass({
  render: function() {
    return (
      <div id='navigation' className='stretch'>
        <div className = 'nav-container'>
          <NavItem title='Home' link='#'/>
          <NavItem title='About Me' link='#'/>
          <NavItem title='Projects' link='#'/>
          <NavItem title='Contact Me' link='#'/>
        </div>
      </div>
    );
  }
});

module.exports = Navigation;