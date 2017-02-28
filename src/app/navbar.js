import React from 'react'
import { Link } from 'react-router'
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
      }
    }

    this.updateGroup = this.updateGroup.bind(this)
  }

  updateGroup (newGroup) {
    this.setState({
      group: newGroup
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
          updateGroup: this.updateGroup
        })}
      </div>
    )
  }
}

module.exports = Navbar
