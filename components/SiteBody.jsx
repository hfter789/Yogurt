var React = require('react');
var ReactDOM = require('react-dom');
var Cover = require('./Cover');
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
    var bodyStyle = {
      backgroundImage: 'url(' + config[site].backgroundImage + ')',
    };
    return (
      <div>
        <div style={bodyStyle} className="site-body"></div>
        <div>
          <div className="header-container">
            <Cover imagePath = {config[site].coverImage} />
            <Navigation />
          </div>
          <InfoBody
          imagePath = {config[site].selfy}
          title = {config[site].title}
          description = {config[site].description}
          />
          <ImageGallery
            items={galleryList} />
        </div>
      </div>
    );
  }
});

var site = document.getElementById('content').className;

ReactDOM.render(
  <SiteBody site={site}/>, document.getElementById('content')
);