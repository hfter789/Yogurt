var React = require('react');
var classnames = require('classnames');
import {Grid, Row, Col} from 'react-bootstrap';

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
        <div
          key={index}
          className={classnames(slideClassNames)}>
          <img src={item.original} style={{width: '100%'}}/>
          <div className="description">
            <p style={{
              color: 'white'
            }}>
              {item.description}
            </p>
          </div>
        </div>
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
          <Col xs={12} md={4}>
            {slides[0]}
          </Col>
          <Col xs={12} md={4}>
            {slides[1]}
          </Col>
          <Col xs={12} md={4}>
            {slides[2]}
          </Col>
        </Row>
      </Grid>
    );
  }
});


module.exports = ImageGallery;