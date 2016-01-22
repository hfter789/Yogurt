import React from 'react';
import { Col } from 'react'
const IMAGE_WIDTH = 1421; //px

const About = React.createClass({
    propType: {
        imageList: React.PropTypes.array.isRequired
    },

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

    renderImages() {
        let images = [];
        this.props.imageList.forEach((pair, index) => {
            let {link, description} = pair;
            if (link) {
                images.push(
                    <div style = {{
                        position: 'relative',
                        overflow: 'hidden',
                        height: '800px',
                        width: '100%',
                        zIndex: 1,
                        display: this.state.showImage ? '' : 'none'
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
        if (!this.props.imageList) {
            return null;
        }
        return (
            <div>
                { this.renderImages() }
            </div>
        );
    }
});

module.exports = About;