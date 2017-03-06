import axios from 'axios'
import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { Navbar, MenuItem, Nav, NavItem, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class NavbarComponent extends Component {
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
        <Navbar fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>Eat Genius</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {
                  this.state.isLoggedIn
                  ? <NavDropdown eventKey={3} title='Menu' id='basic-nav-dropdown'>
                    <LinkContainer to={{ pathname: '/profile' }}><MenuItem>Profile</MenuItem></LinkContainer>
                    <MenuItem>Inbox</MenuItem>
                    <MenuItem>Contribute</MenuItem>
                    <MenuItem divider />
                    <MenuItem>Submit Feedback</MenuItem>
                  </NavDropdown>
                  : null
                }
            </Nav>
            <Nav pullRight>
              {
                  this.state.isLoggedIn
                  ? <LinkContainer to={{ pathname: '/' }}><NavItem onClick={this.handleSignout}>Sign Out</NavItem></LinkContainer>
                  : <LinkContainer to={{ pathname: '/signup' }}><NavItem>Sign Up</NavItem>
                  </LinkContainer>
                }
              {
                  !this.state.isLoggedIn
                  ? <LinkContainer to={{ pathname: '/login' }}><NavItem>Login </NavItem>
                  </LinkContainer>
                  : null
                }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {React.cloneElement(this.props.children, { group: this.state.group, updateGroup: this.updateGroup, userId: this.state.userId, updateUser: this.updateUser, isLoggedIn: this.state.isLoggedIn, updateLoggedIn: this.updateLoggedIn })}
      </div>
    )
  }
}

export default NavbarComponent
