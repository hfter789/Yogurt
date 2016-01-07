var React = require('react');
var ReactDOM = require('react-dom');
var Navigation = require('./Navigation');
var InfoBody = require('./InfoBody');
var ImageGallery = require('./ImageGallery');
var config = require('../configs/config.json');

var SiteBody = React.createClass({
  propTypes: {
    site: React.PropTypes.string.isRequired
  },

  render: function() {
    var site = this.props.site;
    var path = config[site].coverImage;
    var galleryList = config[site].galleryList;
    return (
      <div>
        <div>
          <div className="header-container">
            <div style={{
              width: '100%',
              height: '30px'
            }}>
            </div>
            <Navigation />
          </div>
          <InfoBody
          imagePath = {config[site].selfy}
          title = {config[site].title}
          description = {config[site].description}
          />
        </div>
      </div>
    );
  }
});

var site = document.getElementById('content').className;

ReactDOM.render(
  <SiteBody site={site}/>, document.getElementById('content')
);