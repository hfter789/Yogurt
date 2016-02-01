import React from 'react';
import {Col} from 'react-bootstrap';
import ImageItem from './ImageItem';
import DescriptionModal from './DescriptionModal';

const NO_MODAL_INDEX = -1;
const ProjectDisplay = React.createClass({
	propTypes: {
		projectTitle: React.PropTypes.string,
		images: React.PropTypes.array
	},

	getInitialState() {
		return ({
			currentOpen: NO_MODAL_INDEX
		});
	},

	handleImageClick(imageIndex) {
		if (imageIndex !== this.state.currentOpen) {
			this.setState({
				currentOpen: imageIndex
			})
		}
	},

	handleModalClose() {
		console.log('hi');
		this.setState({
			currentOpen: NO_MODAL_INDEX
		});
	},

	renderImages() {
		let images = [];
		this.props.images.forEach((image, index) => {
			images.push(
				<ImageItem image={image} index={index} handleImageClick={this.handleImageClick.bind(this, index)}/>
		    );
		});
		return images;
	},

	render: function() {
		let props = this.props;
		let desc = '';
		let showModal = false;
		let currentOpen = this.state.currentOpen;
		if (!props.images) {
			return null;
		}
		if (currentOpen !== NO_MODAL_INDEX) {
			desc = props.images[currentOpen].desc;
			showModal = true;
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
				<DescriptionModal
					showModal={showModal}
					handleModalClose={this.handleModalClose}
					desc={desc}
				/>
			</div>
		);
	}
});

module.exports = ProjectDisplay;