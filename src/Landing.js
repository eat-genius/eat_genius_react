import React from 'react'
import { Link } from 'react-router'

class Landing extends React.Component {
  render () {
    return (
      <div>
        <div className='container'>
          {
            this.props.isLoggedIn === false
            ? null
            : <ol className='breadcrumb'>
              <li className='active'>Home</li>
              <li><Link to='profile'>Profile</Link></li>
            </ol>
          }

        </div>
        <div className='jumbotron' style={{backgroundImage: 'url(http://res.cloudinary.com/dk5dqve4y/image/upload/c_scale,w_1201/v1488398667/bg_s2qojr.jpg)'}}>
          <div className='container'>
            <h1>Eat like a genius.</h1>
            <p>The Eat Genius application has been specially designed to save you time and stress and has streamlined the process of deciding where to eat with your partner and friends.</p>
            <p><Link className='btn btn-primary btn-lg' to='signup' role='button'>Create Account »</Link></p>
          </div>
        </div>
        <div className='container'>
          <div className='row' id='row'>
            <div className='col-md-4'>
              <h2>How It Works</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
              <p><a className='btn btn-default' href='#' role='button'>View details »</a></p>
            </div>
            <div className='col-md-4'>
              <h2>Developers</h2>
              <p>This full-stack progressive web application was built in just a few days by two talented developers: <b><a style={{textDecoration: 'none'}} href='https://github.com/michaelfriedman' target='_blank'>Michael Friedman</a></b> & <b><a style={{textDecoration: 'none'}} href='https://github.com/christopher-metz' target='_blank'>Chris Metz</a></b>. We employed the following technologies in this application: React, Node, PostgreSQL, Knex, and Express.</p>
              <p><a className='btn btn-default' href='#' role='button'>View details »</a></p>
            </div>
            <div className='col-md-4'>
              <h2>Eat Genius Community</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p><a className='btn btn-default' href='#' role='button'>View details »</a></p>
            </div>
          </div>

          <hr />

          <footer>
            <p>© 2017 Eat Genius, Inc.</p>
          </footer>
        </div>
      </div>
    )
  }
}

module.exports = Landing
