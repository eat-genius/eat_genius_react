import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

class JumbotronComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Eat like a genius.',
      tagline: 'The Eat Genius application has been specially designed to save you time and stress and has streamlined the process of deciding where to eat with your partner and friends.',
      backgroundImage: 'url(http://res.cloudinary.com/dk5dqve4y/image/upload/c_scale,w_1201/v1488398667/bg_s2qojr.jpg)'
    }
  }
  render () {
    return (
      <Jumbotron style={{ backgroundImage: this.state.backgroundImage}}>
        <h1>{this.state.title}</h1>
        <p>{this.state.tagline}</p>
        <p><Button style={{ marginLeft: '1%' }} bsStyle='primary'>Learn more</Button></p>
      </Jumbotron>
    )
  }
}

export default JumbotronComponent
