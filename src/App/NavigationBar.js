import axios from 'axios'
import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { Nav, FormGroup, FormControl, Button, NavDropdown, Navbar, NavItem, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './App.css'

class NavigationBar extends Component {
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
        {/* <nav className='navbar navbar-default navbar-fixed-top'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar' />
                <span className='icon-bar' />
                <span className='icon-bar' />
              </button>
              <Link className='navbar-brand' to='/'>Eat Genius</Link>
            </div>

            <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
              <ul className='nav navbar-nav' />
              <ul className='nav navbar-nav navbar-right'>
                { this.state.isLoggedIn
                  ? <li className='active'>
                    <Link to='/' onClick={this.handleSignout}>Sign Out</Link>
                  </li>
                : <li>
                  <Link to='login'>Sign Up / Log In</Link>
                </li>
                }
              </ul>
            </div>
          </div>
        </nav> */}
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
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
                : null
              }
            </Nav>
            <Nav pullRight>
              {
                this.state.isLoggedIn
                ? <LinkContainer to={{ pathname: '/' }}><NavItem onClick={this.handleSignout}>Sign Out</NavItem></LinkContainer>
                : <LinkContainer to={{ pathname: '/signup' }}><NavItem>Sign Up / Log In</NavItem>
                </LinkContainer>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {React.cloneElement(this.props.children, { group: this.state.group, updateGroup: this.updateGroup, userId: this.state.userId, updateUser: this.updateUser, isLoggedIn: this.state.isLoggedIn, updateLoggedIn: this.updateLoggedIn })}
      </div>
    )
  }
}

export default NavigationBar
