import AddPeople from '../new-group/add-people'
import Landing from '../landing/landing'
import Navbar from './navbar'
import NewGroup from '../new-group/new-group'
import Profile from '../profile/profile'
import SignUpForm from '../signup/signup'
import LoginForm from '../login/login'
import '../tachyons.css'
import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Navbar}>
          <IndexRoute component={Landing} />
          <Route path='/signup' component={SignUpForm} />
          <Route path='/login' component={LoginForm} />
          <Route path='/profile' component={Profile} />
          <Route path='/newGroup' component={NewGroup} />
          <Route path='/addPeople' component={AddPeople} />
        </Route>
      </Router>
    )
  }
}

export default App
