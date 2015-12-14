var React = require('react');

var NavItem = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div className="nav-item">
        <p>{this.props.title}</p>
      </div>
    );
  }
});

module.exports = NavItem;