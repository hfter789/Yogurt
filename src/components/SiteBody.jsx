var React = require('react');
var ReactDOM = require('react-dom');
var Navigation = require('./Navigation');
var InfoBody = require('./InfoBody');
var config = require('../../configs/config.json');

var SiteBody = React.createClass({
  propTypes: {
    site: React.PropTypes.string.isRequired
  },

  render: function() {
    let site = this.props.site;
    let siteConfig = config[site];
    let path = siteConfig.coverImage;
    let galleryList = siteConfig.galleryList;
    return (
      <div>
        <div>
          <div className="header-container">
            <div style={{
              width: '100%',
              height: '30px'
            }}>
            </div>
            <Navigation site={site} brand={siteConfig.title}/>
          </div>
          <InfoBody
          imagePath = {siteConfig.selfy}
          title = {siteConfig.title}
          description = {siteConfig.description}
          />
        </div>
      </div>
    );
  }
});

module.exports = SiteBody;