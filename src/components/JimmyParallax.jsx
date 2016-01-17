import React from 'react';
import ParallaxGallery from './ParallaxGallery';
import config from '../../configs/config.json';

const JimmyAbout = React.createClass({
	render: function() {
		let siteConfig = config.jimmy;
		return (
			<ParallaxGallery imageList={siteConfig.imageList} />
		);
	}
});

module.exports = JimmyAbout;