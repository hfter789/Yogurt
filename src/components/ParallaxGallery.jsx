import React from 'react';
import { Col } from 'react-bootstrap';
import config from '../../configs/config.json';

const About = React.createClass({

    renderDescription(desc) {
        return (
            <h1 style = {{
                position: 'absolute',
                left: 0,
                right: 0,
                top: '150px',
                color: 'white',
                fontFamily: 'handwrite',
                fontWeight: 300,
                textAlign: 'center',
                textShadow: '0 0 5px black',
                fontSize: '8vmax'
            }}>
                { desc }
            </h1>
        );
    },

    renderImages(imageList) {
        let images = [];
        imageList.forEach((pair, index) => {
            let {link, description} = pair;
            if (link) {
                images.push(
                    <div style = {{
                        background: 'url("'+ link + '") no-repeat center center fixed',
                        backgroundSize: 'cover',
                        position: 'relative',
                        height: '100vh'
                    }}>
                        { this.renderDescription(description) }
                    </div>
                );
            }
        });
        return images;
    },

    render() {
        let imageList = config[this.props.route.site].imageList;
        if (!imageList) {
            return null;
        }
        return (
            <div>
                { this.renderImages(imageList) }
            </div>
        );
    }
});

module.exports = About;