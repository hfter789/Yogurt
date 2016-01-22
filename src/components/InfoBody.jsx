import React from 'react';
import {Grid, Row, Col, Button, Image} from 'react-bootstrap';

const InfoBody = React.createClass({
  propTypes: {
    imagePath: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    backgroundUrl: React.PropTypes.string.isRequired
  },

  render: function() {
    let title = this.props.title;
    return (
      <div style={{
        minHeight: '100vh',
        backgroundImage: 'url(' + this.props.backgroundUrl + ')'
      }}>
        <Grid style={{
          padding: '30px',
          paddingTop: '100px',
          paddingBottom: '100px'
        }}>
          <Row className="show-grid">
            <Col xs={12} md={4} mdPush={2}>
              <div className='text-container'>
                { !!this.props.title ?
                    <h2 className = 'title'> 
                      {this.props.title}
                    </h2>
                    :
                    null
                }
                <h5>
                  Full Stack Web Developer
                </h5>
                <p>
                  {this.props.description}
                </p>
                <Button bsStyle="primary" bsSize="large">Readmore</Button>
              </div>
            </Col>
          </Row>
        </Grid>
        </div>
    );
  }
});

module.exports = InfoBody;