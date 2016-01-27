import React from 'react';
import {Col} from 'react-bootstrap';
import ImageItem from './ImageItem';

const ProjectDisplay = React.createClass({
	propTypes: {
		projectTitle: React.PropTypes.string,
		images: React.PropTypes.array
	},

	getInitialState() {
		return ({
			currentOpen: -1
		});
	},

	handleClick(event) {
		console.log(event);
	},

	renderImages() {
		let images = [];
		this.props.images.forEach((image, index) => {
			images.push(
				<ImageItem image={image} index={index} clickHandler={this.handleClick.bind(this, index)}/>
		    );
		});
		return images;
	},

	render: function() {
		let props = this.props;
		if (!props.images) {
			return null;
		}

		return (
			<div>
				<p style={{
					fontSize: '5em'
				}}> { props.projectTitle } </p>
				<div style={{
					overflow: 'overlay',
					backgroundColor: 'black',
					paddingTop: '20px',
					paddingBottom: '20px',
					paddingLeft: '10vw',
					paddingRight: '10vw',
					marginBottom: '50px'
				}}>
			        { this.renderImages() }
				</div>
			</div>
		);
	}
});

module.exports = ProjectDisplay;