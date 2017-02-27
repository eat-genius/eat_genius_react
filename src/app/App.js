import Landing from '../landing/landing.js';
import Navbar from './navbar.js';
import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './app/App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path='/' component={Navbar}>
            <IndexRoute component={Landing} />
            <Route path='/level' component={Level1} />
            <Route path='/scores' component={Scores} />
            <Route path='/leaderboard' component={Leaderboard} />
          </Route>
        </Router>
    );
  }
}

export default App;
