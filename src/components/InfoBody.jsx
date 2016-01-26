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
      <div style={{
        height: '700px',
        backgroundImage: 'url(' + this.props.backgroundUrl + ')'
      }}>
        <Grid style={{
          padding: '30px',
          paddingTop: '200px',
          paddingBottom: '100px'
        }}>
          <Row className="show-grid">
            <Col xs={12} xsPush={5} md={8} mdPush={4}>
              <div className='text-container'>
                { !!title ?
                    <h2 className = 'title' style={{
                      fontSize: '7vw'
                    }}> 
                      { title }
                    </h2>
                    :
                    null
                }
                <h5>
                  { this.props.subTitle }
                </h5>
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