import React from 'react';

const Cover = React.createClass({
  propTypes: {
    imagePath: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <img src={this.props.imagePath} id="cover" />
    );
  }
});

module.exports = Cover;