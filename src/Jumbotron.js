import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

class JumbotronComponent extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <Jumbotron
        style={{backgroundImage: 'url(http://res.cloudinary.com/dk5dqve4y/image/upload/c_scale,w_1201/v1488398667/bg_s2qojr.jpg)'}}>
        <h1>Eat like a genius.</h1>
        <p>The Eat Genius application has been specially designed to save you time and stress and has streamlined the process of deciding where to eat with your partner and friends.</p>
        <p>
          <Button style={{ marginLeft: '1%' }} bsStyle='primary'>
            Learn more
          </Button>
        </p>
      </Jumbotron>
    )
  }
}

export default JumbotronComponent
