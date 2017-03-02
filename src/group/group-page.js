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

    this.createRanking = this.createRanking.bind(this)
    this.addRestaurantsVotes = this.addRestaurantsVotes.bind(this)
  }

  createRanking (votes) {
    const ranking = []
    for (const vote of votes) {
      if ((vote.total_votes / this.props.group.people.length) > 0.6) {
        vote.percent = (vote.yes_votes / vote.total_votes)
        ranking.push(vote)
      }
    }
    return ranking
  }

  addRestaurantsVotes (rankings, restaurants) {
    let newRestaurants = restaurants.filter((restaurant) => {
      for (const ranking of rankings) {
        if (ranking.restaurant_id === restaurant.id) {
          restaurant.vote = ranking
          return (true)
        }
      }
      return (false)
    })
    newRestaurants = newRestaurants.sort(function (a, b) {
      return b.vote.percent - a.vote.percent
    })
    return newRestaurants
  }

  componentDidMount () {
    let ranking
    axios.get(`/votes/${this.props.group.id}`)
      .then((res) => {
        const votes = res.data.rows
        ranking = this.createRanking(votes)
        return axios.get(`/restaurants/${this.props.group.id}`)
      })
      .then((res) => {
        const restaurants = res.data
        const rankedRestaurants = this.addRestaurantsVotes(ranking, restaurants)
        this.setState({
          restaurants: rankedRestaurants
        })
      })
      .catch((err) => {
        return err
      })
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
                <div key={restaurant.id} className='group-page-place'>
                  <div>{restaurant.name}</div>
                  <div>Votes: {restaurant.vote.yes_votes}/{restaurant.vote.total_votes}</div>
                </div>
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
