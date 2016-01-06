var React = require('react');
import {Grid, Row, Col, Button} from 'react-bootstrap';

var InfoBody = React.createClass({
  propTypes: {
    imagePath: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired
  },

  render: function() {
    var title = this.props.title;
    return (
      <Grid style={{'padding': '30px'}}>
        <Row className="show-grid">
          <Col xs={12} md={4} mdPush={1} style={{padding: '0px'}}>
            <div className='image-container'>
              <img src={this.props.imagePath} style={{width: '100%'}}/>
            </div>
          </Col>
          <Col xs={12} md={4} mdPush={2}>
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
              <Button bsStyle="primary" bsSize="large">Readmore</Button>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
});

module.exports = InfoBody;