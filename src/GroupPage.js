import React, { Component } from 'react'
// import { Link } from 'react-router'
import axios from 'axios'
import './App/App.css'

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
      } else {
        vote.percent = ((vote.yes_votes / vote.total_votes) * 0.5)
        ranking.push(vote)
      }
    }
    return ranking
  }

  addRestaurantsVotes (rankings, restaurants) {
    // We are filtering where every case passes. Should be a map.
    // let newRestaurants = restaurants.filter((restaurant) => {
    //   for (const ranking of rankings) {
    //     if (ranking.restaurant_id === restaurant.id) {
    //       restaurant.vote = ranking
    //       return (true)
    //     }
    //   }
    //   return (false)
    // })
    let newRestaurants = restaurants.map((restaurant) => {
      let added = false
      for (const ranking of rankings) {
        if (ranking.restaurant_id === restaurant.id) {
          restaurant.vote = ranking
          added = true
        }
      }
      if (!added) {
        restaurant.vote = {
          restaurant_id: restaurant.id,
          yes_votes: 0,
          total_votes: 0
        }
      }
      return restaurant
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
      <div className='col-sm-12 container-fluid'>
        <div className='container-fluid text-center'>{this.props.group.name}</div>
        <div className='row container-fluid' style={{display: 'flex', justifyContent: 'center', borderBottom: 'solid black 2px'}}>
          {this.props.group.people.map((person) => {
            return (
              <div key={person.id} className='col-sm-1 group-page-person'>
                <img src={person.profile_photo_url} alt='img' className='img-responsive img-circle' />
                <div className='text-center'>{person.first_name}</div>
              </div>
            )
          })}
        </div>
        <div className='container-fluid row'>
          <div className='col-sm-12 col-md-5 container-fluid'>
            <table className='table table-striped'>
              <tbody>
                {this.state.restaurants.map((restaurant) => {
                  return (
                    <tr key={restaurant.id} className='row container-fluid'>
                      <td>
                        <a href={restaurant.url}>{restaurant.name}</a>
                        <div>Yelp Score: {restaurant.rating}</div>
                      </td>
                      <td>
                        <div>
                          Votes: {restaurant.vote.yes_votes}/{restaurant.vote.total_votes}
                        </div>
                      </td>
                      <td>
                        <div>{restaurant.address}</div>
                        <div>{restaurant.city}, {restaurant.state_code}</div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className='col-sm-12 col-md-7' style={{height: '100%'}}>Map</div>
        </div>
      </div>
    )
  }
}

module.exports = GroupPage
