import React from 'react'
import { browserHistory } from 'react-router'
import { Row, Form, FormControl, ControlLabel, FormGroup, Button } from 'react-bootstrap'
import './new-group.css'

class NewGroup extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      group: this.props.group
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange ({target}) {
    if (target.name) {
      const newGroup = this.state.group
      newGroup[target.name] = target.value
      this.setState({
        group: newGroup
      })
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.updateGroup(this.state.group)
    browserHistory.push('addPeople')
  }

  render () {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}} className='container'>
        <Row>
          <Form id='newGroup' onSubmit={this.handleSubmit} role='form' className='col-md-9 go-right'>
            <h2>Create Your Group</h2>
            <p>Create a group name and enter a search preference.</p>
            <FormGroup>
              <FormControl onChange={this.handleChange} id='name' name='name' type='text' className='form-control' required />
              <label htmlFor='name'>Group Name</label>
            </FormGroup>
            <FormGroup>
              <FormControl onChange={this.handleChange} id='phone' name='location' type='tel' className='form-control' required />
              <ControlLabel htmlFor='phone'>Location</ControlLabel>
            </FormGroup>
            <FormGroup>
              <FormControl onChange={this.handleChange} id='message' name='search' className='form-control' required />
              <ControlLabel htmlFor='message'>Cuisine</ControlLabel>
            </FormGroup>
            <Button bsStyle='success'>Create Group</Button>
          </Form>
        </Row>
      </div>
    )
  }
}

module.exports = NewGroup
