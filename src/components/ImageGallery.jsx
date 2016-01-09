var React = require('react');
var classnames = require('classnames');
import {Grid, Row, Col, Image, Carousel, CarouselItem} from 'react-bootstrap';

var ImageGallery = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  render: function() {
    var slides = [];
    this.props.items.map((item, index) => {
      let slide = (
        <CarouselItem>
          <img width={900} height={500} src={item.original} style={{
            margin: '0 auto'
          }}/>
          <div
            className="carousel-caption">
            <div>
              <p>
                {item.description}
              </p>
            </div>
          </div>
        </CarouselItem>
      );
      slides.push(slide);
    });
    return (
      <Carousel>
        { slides }
      </Carousel>
    );
  }
});


module.exports = ImageGallery;