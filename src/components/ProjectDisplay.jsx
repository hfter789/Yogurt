import React from 'react';
import {Col, Button} from 'react-bootstrap';
import ImageItem from './ImageItem';

const ProjectDisplay = React.createClass({
	propTypes: {
		projectTitle: React.PropTypes.string,
		images: React.PropTypes.array
	},

	renderImages() {
		let images = [];
		this.props.images.forEach((image) => {
			images.push(
				<ImageItem image={image}/>
		    );
		});
		return images;
	},

	render: function() {
		let props = this.props;
		let desc = '';
		let showModal = false;
		if (!props.images) {
			return null;
		}

		return (
			<div style={{
				minHeight: '100vh'
			}}>
				<div style={{
					paddingBottom: '20px',
					paddingTop: '30px',
					fontSize: '7vw',
					textAlign: 'center',
					fontFamily: 'handwrite',
					fontWeight: '500',
					fontStyle: 'oblique',
					backgroundColor: 'black',
					color: 'white'
				}}> { props.projectTitle } </div>
				<div style={{
					overflow: 'hidden',
					backgroundColor: 'white',
					paddingTop: '20px'
				}}>
			        { this.renderImages() }
				</div>
				<div style={{
					textAlign: 'center',
					fontFamily: 'handwrite'
				}}>
					<Button style={{
						paddingTop: '12px'
					}}>READMORE</Button>
				</div>
			</div>
		);
	}
});

module.exports = ProjectDisplay;