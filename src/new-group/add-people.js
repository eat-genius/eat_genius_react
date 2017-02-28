import axios from 'axios'
import { browserHistory } from 'react-router'
import React from 'react'
import './add-people.css'

class AddPeople extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      people: [],
      group: this.props.group
    }

    this.addMember = this.addMember.bind(this)
    this.removeMember = this.removeMember.bind(this)
    this.createGroup = this.createGroup.bind(this)
  }

  componentDidMount () {
    axios.get('/users')
      .then((res) => {
        this.setState({
          people: res.data
        })
      })
      .catch((err) => {
        console.log('it failed', err)
      })
  }

  addMember (person) {
    const newMember = this.state.people.filter(ele => ele.id === person.id)[0]
    const newGroup = this.state.group
    newGroup.people.push(newMember)
    this.setState({ group: newGroup })
  }

  removeMember (person) {
    const oldGroup = this.state.group
    const newMembers = oldGroup.people.filter(ele => ele.id !== person.id)
    const newGroup = {
      name: oldGroup.name,
      location: oldGroup.location,
      search: oldGroup.search,
      people: newMembers
    }
    this.setState({ group: newGroup })
  }

  createGroup () {
    const newGroup = {
      name: this.state.group.name,
      location: this.state.group.location,
      search: this.state.group.search,
      people: this.state.group.people
    }
    axios.post('/groups', newGroup)
      .then((res) => {
        console.log('it worked', res.data)
      })
      .catch((err) => {
        console.log('it failed', err)
      })
    browserHistory.push('/profile')
  }

  render () {
    return (
      <div className='add-people-main'>
        <label className='add-people-search'>Search People: <input type='text' /></label>
        <table className='add-people-results'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            { this.state.people.map((person) => {
              return (
                <tr key={person.id} onClick={() => this.addMember(person)}>
                  <td>{person.first_name}</td>
                  <td>{person.last_name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className='add-people-group'>{this.state.group.name}</div>
        <table className='margintop'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            { this.state.group.people.map((person) => {
              return (
                <tr key={person.id} onClick={() => this.removeMember(person)}>
                  <td>{person.first_name}</td>
                  <td>{person.last_name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <button onClick={this.createGroup}>Create Group</button>
      </div>
    )
  }
}

module.exports = AddPeople
