var React = require('react');
var ReactDOM = require('react-dom');
var Cover = require('./Cover');
var Navigation = require('./Navigation');
var config = require('../configs/config.json');

var SiteBody = React.createClass({
  propTypes: {
    site: React.PropTypes.string.isRequired
  },

  render: function() {
    var path = config[this.props.site].coverImage;
    return (
      <div>
        <Cover imagePath = {config[this.props.site].coverImage} />
        <Navigation />
      </div>
    );
  }
});

var site = document.getElementById('content').className;

ReactDOM.render(
  <SiteBody site={site}/>, document.getElementById('content')
);