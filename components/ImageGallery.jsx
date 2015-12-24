var React = require('react');
var classnames = require('classnames');

var ImageGallery = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  render: function() {
    var slides = [];
    this.props.items.map((item, index) => {
      let slideClassNames = {
        // 'hidden': this.isSlideShowing(index),
        'image-gallery-slide': true
      };
      let slide = (
        <div
          key={index}
          className={classnames(slideClassNames)}>
          <img src={item.original}/>
          <div className="description">
            <p> {item.description} </p>
          </div>
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