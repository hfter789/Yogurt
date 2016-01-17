import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import InfoBody from './InfoBody';
import config from '../../configs/config.json';

const SiteBody = React.createClass({
	propTypes: {
		site: React.PropTypes.string.isRequired
	},

	render: function() {
		let site = this.props.site;
		let siteConfig = config[site];
		let path = siteConfig.coverImage;
		let galleryList = siteConfig.galleryList;
		return (
			<InfoBody
				imagePath = {siteConfig.selfy}
				title = {siteConfig.title}
				description = {siteConfig.description}
				/>
		);
	}
});

module.exports = SiteBody;