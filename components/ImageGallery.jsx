var React = require('react');

var ImageGallery = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired
  },
  render: function() {
    var slides = [];
    this.props.items.map((item, index) => {
      let slide = (
        <div
          key={index}
          className='image-gallery-slide'>
          <img src={item.original}/>
          {item.description}
        </div>
      );
      slides.push(slide);
    });
    return (
      <div className="gallery-container">
        <a onClick = {this.handlePrevBtnClick} className="button prev">‹</a>
        <a onClick = {this.handleNextBtnClick} className="button next">›</a>
        {slides}
      </div>
    );
  }
});


module.exports = ImageGallery;