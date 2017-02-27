import React from 'react';
import { Link } from 'react-router';
import './landing.css';

class Landing extends React.Component {
  render() {
    return (
      <div class="landing">
        <header>
          <div class="header-text">
            Can't Decide what to eat?
            <Link to="signup">Start Choosing Now!</Link>
          </div>
        </header>
        <main>
            <div class="taglines">
              <div class="icon"><h2><i class="material-icons">group</i></h2></div>
              <h5>Great For Groups!</h5>
            </div>

            <div class="taglines">
              <div class="icon"><h2><i class="material-icons">mood</i></h2></div>
              <h5>Quickly Agree On What To Eat!</h5>
            </div>

            <div class="taglines">
              <div class="icon"><h2><i class="material-icons">restaurant</i></h2></div>
              <h5>All The Restaurants In Yelp!</h5>
            </div>
          </main>
      </div>
    )
  }
}

module.exports = Landing;
