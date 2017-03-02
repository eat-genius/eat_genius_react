import React, { Component } from 'react'
import axios from 'axios'
import './group-vote.css'

class GroupVote extends Component {
  constructor (props) {
    super(props)

    this.state = {
      restaurants: [{
        id: 0,
        name: '',
        img_url: '',
        rating: 0,
        description: ''
      }]
    }

    // this.handleVote = this.handleVote.bind(this)
  }

  componentDidMount () {
    axios.get(`/restaurants/user/${this.props.group.id}`)
      .then((res) => {
        this.setState({
          restaurants: res.data.rows
        })
        console.log(this.state.restaurants[0])
      })
      .catch((err) => {
        console.log('it failed', err)
      })
  }

  handleVote (bool) {
    axios.get(`/user_groups/${this.props.group.id}`)
      .then((res) => {
        return axios.post('/votes', {
          restaurant_id: this.state.restaurants[0].id,
          user_groups: res.data[0].id,
          acceptance: bool
        })
      })
      .then((res) => {
        console.log('it worked', res)
      })
      .catch((err) => {
        console.log(err)
      })
    const newRestaurants = this.state.restaurants.slice(1)
    this.setState({
      restaurants: newRestaurants
    })
  }

  render () {
    return (
      <div className='group-vote'>
        <div>
          <div>{this.state.restaurants[0].name}</div>
          <div>IMG: {this.state.restaurants[0].img_url}</div>
          <div>rating: {this.state.restaurants[0].rating}</div>
          <div>description: {this.state.restaurants[0].description}</div>
        </div>
        <div>
          <div onClick={() => this.handleVote(true)}>Yes</div>
          <div onClick={() => this.handleVote(false)}>No</div>
        </div>
      </div>
    )
  }
}

module.exports = GroupVote
