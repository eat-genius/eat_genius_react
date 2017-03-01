import React, { Component } from 'react'
// import { Link } from 'react-router'
import axios from 'axios'
import './group-page.css'

class GroupPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      restaurants: []
    }

    this.getRestaurants = this.getRestaurants.bind(this)
  }

  getRestaurants () {
    axios.get(`/restaurants/${this.props.group.id}`)
      .then((res) => {
        this.setState({
          restaurants: res.data
        })
      })
      .catch((err) => {
        console.log('it failed', err)
      })
  }

  componentDidMount () {
    this.getRestaurants()
  }

  render () {
    return (
      <div className='group-page'>
        <div className='group-page-name'>{this.props.group.name}</div>
        <div className='group-page-people'>
          {this.props.group.people.map((person) => {
            return (
              <div key={person.id} className='group-page-person'>
                <img src={person.profile_photo_url} className='group-page-img' alt='img' />
                <div>{person.first_name}</div>
              </div>
            )
          })}
        </div>
        <div className='group-page-results'>
          <div className='group-page-places'>
            {this.state.restaurants.map((restaurant) => {
              return (
                <div key={restaurant.id} className='group-page-place'>{restaurant.name}</div>
              )
            })}
          </div>
          <div className='group-page-map'>Map</div>
        </div>
      </div>
    )
  }
}

module.exports = GroupPage
