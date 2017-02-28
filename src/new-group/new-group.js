import React from 'react'
import { browserHistory } from 'react-router'
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
      <div className='new-group-main'>
        <div className='new-group'>
          <h3>New Group</h3>
          <form className='new-group-form'>
            <label>
              Group Name:
              <input type='text' name='name' placeholder='Group Name' onChange={this.handleChange} />
            </label>
            <label>
              Location:
              <input type='text' name='location' placeholder='Location' onChange={this.handleChange} />
            </label>
            <label>
              Type of Restaurant:
              <input type='text' name='search' placeholder='Search Term' onChange={this.handleChange} />
            </label>
            <input type='submit' onClick={this.handleSubmit} />
          </form>
        </div>
      </div>
    )
  }
}

module.exports = NewGroup
