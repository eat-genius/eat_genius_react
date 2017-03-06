import React, { Component } from 'react'
import { Link } from 'react-router'
import './landing.css'
import JumbotronComponent from '../Jumbotron'
import { Row, Col, Button } from 'react-bootstrap'

class Landing extends Component {
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
        <JumbotronComponent />
        <div className='container'>
          <Row>
            <Col md={4}>
              <h2>How It Works</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
              <p><Button bsStyle='default'>View details »</Button></p>
            </Col>
            <Col md={4}>
              <h2>Developers</h2>
              <p>This full-stack progressive web application was built in just a few days by two talented developers: <b><a style={{textDecoration: 'none'}} href='https://github.com/michaelfriedman' target='_blank'>Michael Friedman</a></b> & <b><a style={{textDecoration: 'none'}} href='https://github.com/christopher-metz' target='_blank'>Chris Metz</a></b>. We employed the following technologies in this application: React, Node, PostgreSQL, Knex, and Express.</p>
              <p><Button bsStyle='default'>View details »</Button></p>
            </Col>
            <Col md={4}>
              <h2>Eat Genius Community</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p><Button bsStyle='default'>View details »</Button></p>
            </Col>
          </Row>
          <hr />
          <footer>
            <p>© 2017 Eat Genius, Inc.</p>
          </footer>
        </div>
      </div>
    )
  }
}

export default Landing
