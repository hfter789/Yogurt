"use strict";

var React = require('react');

var Cover = React.createClass({
  displayName: "Cover",

  propTypes: {
    imagePath: React.PropTypes.string.isRequired
  },
  render: function render() {
    return React.createElement("img", { src: this.props.imagePath, id: "cover" });
  }
});

module.exports = Cover;