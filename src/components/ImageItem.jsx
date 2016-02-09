import React from 'react';
import {Col, Image} from 'react-bootstrap';
import marked from 'marked';

const ProjectDisplay = React.createClass({
    propTypes: {
        image: React.PropTypes.object.isRequired
    },

    render: function() {
        let image = this.props.image;
        return (
            <Col xs={6} md={3} style={{
                padding: '20px',
                fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif'
            }}> 
                <Image src={image.link} style={{
                    width: '100%',
                    height: '100%'
                }}/>
                <span dangerouslySetInnerHTML={{__html:marked(image.desc)}} />
            </Col>
        );
    }
});

module.exports = ProjectDisplay;