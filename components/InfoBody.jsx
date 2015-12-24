var React = require('react');
var NavItem = require('./NavItem');

var InfoBody = React.createClass({
  propTypes: {
    imagePath: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired
  },

  render: function() {
    var title = this.props.title;
    return (
      <div className='info-container'>
        <div className='info-body'>
          <div className='image-container'>
            <img src={this.props.imagePath}/>
          </div>
          <div className='text-container'>
            { !!this.props.title ?
                        <h2 className = 'title'> 
                          {this.props.title}
                        </h2>
                        :
                        null
                    }
            <p>
              {this.props.description}
            </p>
            <NavItem title = 'Readmore'/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = InfoBody;