import React from 'react';
import {Col} from 'react-bootstrap';

const ProjectDisplay = React.createClass({
    propTypes: {
        image: React.PropTypes.object.isRequired,
        handleImageClick: React.PropTypes.func
    },

    render: function() {
        let props = this.props;
        return (
            <Col xs={6} md={4} style={{
                padding: '20px'
            }}> 
                <img className='project-image' src={props.image.link} onClick={props.handleImageClick}/>
            </Col>
        );
    }
});

module.exports = ProjectDisplay;