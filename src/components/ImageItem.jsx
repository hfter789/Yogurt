import React from 'react';
import {Col} from 'react-bootstrap';

const ProjectDisplay = React.createClass({
    propTypes: {
        image: React.PropTypes.object.isRequired
    },

    handleClick() {

    },

    render: function() {
        let props = this.props;
        return (
            <Col xs={6} md={4} style={{
                padding: '20px'
            }}> 
                <img className='project-image' src={props.image.link} />
                <div style={{
                    position: 'absolute'
                }}>
                    { props.image.desc }
                </div>
            </Col>
        );
    }
});

module.exports = ProjectDisplay;