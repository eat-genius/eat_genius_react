import axios from 'axios'
import React from 'react'
import { Link, browserHistory } from 'react-router'
import './navbar.css'

class Navbar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      group: {
        id: 0,
        name: '',
        location: '',
        search: '',
        people: []
      },
      isLoggedIn: false,
      userId: 0
    }

    this.updateGroup = this.updateGroup.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.handleSignout = this.handleSignout.bind(this)
    this.updateLoggedIn = this.updateLoggedIn.bind(this)
  }

  componentDidMount () {
    axios.get('/token')
      .then((res) => {
        if (res.data) {
          this.setState({
            isLoggedIn: true
          })
          browserHistory.push('/profile')
          return
        }

        return
      })
  }
  updateLoggedIn (newLoggedIn) {
    this.setState({
      isLoggedIn: newLoggedIn
    })
  }

  updateGroup (newGroup) {
    this.setState({
      group: newGroup
    })
    // console.log(this.state.group)
  }

  updateUser (newUserId) {
    this.setState({
      userId: newUserId
    })
  }
  handleSignout () {
    axios.delete('token')
    // location.reload()
    this.setState({
      isLoggedIn: false
    })
    console.log('token deleted')
  }
  render () {
    return (
      <div>
        <nav className='nav'>
          <h1 className='nav-h1'>Eat Genius</h1>
          {
            this.state.isLoggedIn
            ? <Link to='/' onClick={this.handleSignout}>Sign Out</Link>
            : <Link to='signup'>Sign Up</Link>
          }
        </nav>
        {React.cloneElement(this.props.children, {
          group: this.state.group,
          updateGroup: this.updateGroup,
          userId: this.state.userId,
          updateUser: this.updateUser,
          isLoggedIn: this.state.isLoggedIn,
          updateLoggedIn: this.updateLoggedIn
        })}
      </div>
    )
  }
}

module.exports = Navbar
