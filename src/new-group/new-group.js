import React from 'react'
import { browserHistory } from 'react-router'
import './new-group.css'

class NewGroup extends React.Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault
    browserHistory.push('/addPeople')
  }

  render () {
    return (
      <div className='new-group-main'>
        <div className='new-group'>
          <h3>New Group</h3>
          <form className='new-group-form'>
            <label>
              Group Name:
              <input type='text' placeholder='Group Name' />
            </label>
            <label>
              Location:
              <input type='text' placeholder='Location' />
            </label>
            <label>
              Type of Restaurant:
              <input type='text' placeholder='Search Term' />
            </label>
            <input type='submit' onSubmit={this.handleSubmit} />
          </form>
        </div>
      </div>
    )
  }
}

module.exports = NewGroup
