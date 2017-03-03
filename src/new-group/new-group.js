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
      // <div classNameName='new-group-main'>
      //   <div classNameName='new-group'>
      //     <h3>New Group</h3>
      //     <form classNameName='new-group-form'>
      //       <label>
      //         Group Name:
              // <input type='text' name='name' placeholder='Group Name' onChange={this.handleChange} />
      //       </label>
      //       <label>
      //         Location:
      //         <input type='text' name='location' placeholder='Location' onChange={this.handleChange} />
      //       </label>
      //       <label>
      //         Type of Restaurant:
      //         <input type='text' name='search' placeholder='Search Term' onChange={this.handleChange} />
      //       </label>
      //       <input type='submit' onClick={this.handleSubmit} />
      //     </form>
      //   </div>
      // </div>

      <div className='container'>
        <div className='row'>
          <form id='newGroup' onSubmit={this.handleSubmit} role='form' className='col-md-9 go-right'>
            <h2>Create Your Group</h2>
            <p>Create a group name and enter a search preference.</p>
            <div className='form-group'>
              <input onChange={this.handleChange} id='name' name='name' type='text' className='form-control' required />
              <label htmlFor='name'>Group Name</label>
            </div>
            <div className='form-group'>
              <input onChange={this.handleChange} id='phone' name='location' type='tel' className='form-control' required />
              <label htmlFor='phone'>Location</label>
            </div>
            <div className='form-group'>
              <input onChange={this.handleChange} id='message' name='search' className='form-control' required />
              <label htmlFor='message'>Cuisine</label>
            </div>
            <button className='btn btn-success'>Create Group</button>
          </form>
        </div>
      </div>
    )
  }
}

module.exports = NewGroup
