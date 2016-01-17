import React from 'react';
import Navigation from './Navigation';
import config from '../../configs/config.json';

const JimmyNavigation = React.createClass({
	render: function() {
		let siteConfig = config.jimmy;
		return (
			<div style={{paddingTop: '50px'}}>
				<Navigation site='jimmy' brand={siteConfig.title}/>
				{this.props.children}
			</div>
		);
	}
});

module.exports = JimmyNavigation;