import axios from 'axios'
import React from 'react'
import { Link, browserHistory } from 'react-router'
import './navbar.css'

class Navbar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      group: {
        name: '',
        location: '',
        search: '',
        people: []
      },
      userId: 0
    }

    this.updateGroup = this.updateGroup.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount () {
    axios.get('/token')
      .then((res) => {
        if (res.data) {
          browserHistory.push('/profile')
          return
        }

        return
      })
  }

  updateGroup (newGroup) {
    this.setState({
      group: newGroup
    })
  }

  updateUser (newUserId) {
    this.setState({
      userId: newUserId
    })
  }

  render () {
    return (
      <div>
        <nav className='nav'>
          <h1 className='nav-h1'>Eat Genius</h1>
          <Link className='navlink' to='signup'>Signup</Link>
        </nav>
        {React.cloneElement(this.props.children, {
          group: this.state.group,
          updateGroup: this.updateGroup,
          userId: this.state.userId,
          updateUser: this.updateUser
        })}
      </div>
    )
  }
}

module.exports = Navbar
