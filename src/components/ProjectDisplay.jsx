import React from 'react';
import {Col} from 'react-bootstrap';

const ProjectDisplay = React.createClass({
	propTypes: {
		projectTitle: React.PropTypes.string,
		images: React.PropTypes.array
	},

	renderImages() {
		let images = [];
		this.props.images.forEach((image) => {
			images.push(
				<Col xs={6} md={4} style={{
					padding: '20px'
				}}>
		        	<img className='project-image' src={image.link}/>
		        </Col>
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