import { Link } from 'react-router'
import React from 'react'
import axios from 'axios'
import './profile.css'

class Profile extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      groups: []
    }
  }

  componentDidMount () {
    axios.get(`/users/id`)
      .then((res) => {
        const name = `${res.data.first_name} ${res.data.last_name}`
        this.setState({ name })
        return axios.get(`/groups/user`)
      })
      .then((response) => {
        this.setState({ groups: response.data })
      })
      .catch((err) => {
        console.log('it failed', err)
      })
  }

  render () {
    return (
      <div className='profile-page'>
        <header className='profile-head'>
          <div className='edit'><Link to='#'>Edit</Link></div>
          <div className='profile-header'>
            <div className='profile-pic'>
              <i className='material-icons'>person</i>
            </div>
            <div className='profile-name'>{this.state.name}</div>
          </div>
        </header>
        <main className='profile-main'>
          <table className='profile-table'>
            <thead>
              <tr><th className='profile-th'>Groups<Link to='newGroup'><i className='material-icons'>add_circle_outline</i></Link></th></tr>
            </thead>
            <tbody>
              { this.state.groups.map((group) => {
                return (
                  <tr key={group.id}><td className='profile-td'>{group.name}</td></tr>
                )
              })}
            </tbody>
          </table>
        </main>
      </div>
    )
  }
}

module.exports = Profile
