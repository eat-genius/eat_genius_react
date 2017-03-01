import React from 'react'
import { Link } from 'react-router'
import './landing.css'

class Landing extends React.Component {
  render () {
    return (
      <div className={'landing'}>
        <button type='button' class='btn btn-default navbar-btn'>Sign in</button>

        <header className='landing-head'>
          <div className={'header-text'}>
            <div>Can't Decide what to eat?</div>
            <Link to='signup'>Start Choosing Now!</Link>
          </div>
        </header>
        <main className='landing-main'>
          <div className={'taglines'}>
            <div className={'icon'}><h2><i className={'material-icons'}>group</i></h2></div>
            <h5>Great For Groups!</h5>
          </div>

          <div className={'taglines'}>
            <div className={'icon'}><h2><i className={'material-icons'}>mood</i></h2></div>
            <h5>Quickly Agree On What To Eat!</h5>
          </div>

          <div className={'taglines'}>
            <div className={'icon'}><h2><i className={'material-icons'}>restaurant</i></h2></div>
            <h5>All The Restaurants In Yelp!</h5>
          </div>
        </main>
      </div>
    )
  }
}

module.exports = Landing
