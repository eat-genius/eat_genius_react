import Landing from '../landing/landing.js';
import Navbar from './navbar.js';
import Profile from '../profile/profile.js';
import SignUp from '../signup/signup.js';
import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path='/' component={Navbar}>
            <IndexRoute component={Landing} />
            <Route path='/signup' component={SignUp} />
            {/* <Route path='/login' component={Login} />
            <Route path='/profile' component={Profile} /> */}
            {/* <Route path='/group' component={Group} /> */}
          </Route>
        </Router>
    );
  }
}

export default App;
