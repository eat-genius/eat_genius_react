import AddPeople from '../new-group/add-people'
import Group from '../group/group'
import GroupPage from '../group/group-page'
import GroupVote from '../group/group-vote'
import Landing from '../Landing'
import Navbar from './Navbar'
import NewGroup from '../new-group/new-group'
import Profile from '../Profile'
import SignUpForm from '../Signup'
import LoginForm from '../Login'
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
          <Route path='/group' component={Group}>
            <IndexRoute component={GroupPage} />
            <Route path='/group/vote' component={GroupVote} />
          </Route>
        </Route>
      </Router>
    )
  }
}

export default App
