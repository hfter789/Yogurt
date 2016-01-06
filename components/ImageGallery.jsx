var React = require('react');
var classnames = require('classnames');
import {Grid, Row, Col, Image} from 'react-bootstrap';

var ImageGallery = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  render: function() {
    var slides = [];
    this.props.items.map((item, index) => {
      let slideClassNames = {
        'image-gallery-slide': true
      };
      let slide = (
        <Col xs={12} md={4}>
          <div
            key={index}
            className={classnames(slideClassNames)}>
            <Image src={item.original} thumbnail />
            <div className="description">
              <p style={{
                color: 'white',
                maxWidth: '100%'
              }}>
                {item.description}
              </p>
            </div>
          </div>
        </Col>
      );
      slides.push(slide);
    });
    return (
      <Grid style={
        {
          backgroundColor: '#222222',
          margin: '0px',
          width: '100%'
        }
      }>
        <Row className="show-grid" style={{
          paddingTop: '20px' 
        }}>
          { slides }
        </Row>
      </Grid>
    );
  }
});


module.exports = ImageGallery;