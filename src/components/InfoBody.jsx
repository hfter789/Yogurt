import React from 'react';
import {Grid, Row, Col, Button, Image} from 'react-bootstrap';

const InfoBody = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    subTitle: React.PropTypes.string.isRequired,
    imagePath: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    backgroundUrl: React.PropTypes.string.isRequired
  },

  render: function() {
    let title = this.props.title;
    return (
      <div id='background-img' style={{
        height: '100vh',
        background: 'url(' + this.props.backgroundUrl + ') no-repeat center center fixed',
        backgroundSize: 'cover'
      }}>
        <Grid style={{
          padding: '30px',
          paddingTop: '250px',
          paddingBottom: '100px'
        }}>
          <Row className='show-grid'>
            <Col xs={12} md={8} mdPush={2}>
              <div className='text-container' style={{
                color: '#39383D'
              }}

              >
                { !!title ?
                    <h2 className = 'title' style={{
                      fontSize: '7vw',
                      textAlign: 'center',
                      fontFamily: 'handwrite',
                      fontWeight: '500',
                      letterSpacing: '10px',
                      fontStyle: 'oblique'
                    }}> 
                      { title }
                    </h2>
                    :
                    null
                }
                <h4 style={{
                  fontSize: '2vw',
                  letterSpacing: '0.5vw',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  { this.props.subTitle }
                </h4>
                <p>
                  {this.props.description}
                </p>
              </div>
            </Col>
          </Row>
        </Grid>
        </div>
    );
  }
});

module.exports = InfoBody;