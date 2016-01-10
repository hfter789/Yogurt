import React from 'react';

const Root = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Root;