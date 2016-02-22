import React from 'react';
import { Col } from 'react-bootstrap';
import config from '../../configs/config.json';

const IMAGE_WIDTH = 1421; //px

const About = React.createClass({

    getInitialState() {
        return {
            windowWidth: IMAGE_WIDTH,
            showImage: false
        };
    },

    handleResize(e) {
        this.setState({windowWidth: window.innerWidth});
    },

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
        this.setState({
            showImage: true
        });
    },

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },

    renderDescription(desc) {
        return (
            <h1 style = {{
                position: 'absolute',
                left: 0,
                right: 0,
                top: '150px',
                color: 'white',
                fontWeight: 300,
                textTransform: 'uppercase',
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
                        position: 'relative',
                        overflow: 'hidden',
                        height: '800px',
                        width: '100%',
                        zIndex: 1,
                        display: this.state.showImage ? '' : 'none',
                        clip: 'rect(0, auto, auto, 0)'
                    }}>
                        <div style = {{
                            top: '50px',
                            position: 'fixed',
                            left: (this.state.windowWidth - IMAGE_WIDTH) / 2
                        }}>
                            <img src = {link} style = {{
                                zIndex: -1
                            }} />
                        </div>
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