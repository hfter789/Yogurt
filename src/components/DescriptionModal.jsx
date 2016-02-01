import React, { PropTypes } from 'react';
import {Modal, Button} from 'react-bootstrap';
import marked from 'marked';

const DescriptionModal = React.createClass({
    propTypes: {
        showModal: PropTypes.bool.isRequired,
        desc: PropTypes.string,
        handleModalClose: PropTypes.func.isRequired
    },

    render() {
        let props = this.props;
        if (!props.desc) {
            return null;
        }
        return (
            <Modal show={this.props.showModal}>
                <Modal.Body>
                    <span dangerouslySetInnerHTML={{__html:marked(props.desc)}} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.handleModalClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
});

module.exports = DescriptionModal;