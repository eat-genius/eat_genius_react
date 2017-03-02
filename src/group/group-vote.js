import React, { Component } from 'react'
import axios from 'axios'
import './group-vote.css'

class GroupVote extends Component {
  constructor (props) {
    super(props)

    this.state = {
      restaurants: false
    }

    this.handleVote = this.handleVote.bind(this)
  }

  componentDidMount () {
    axios.get(`/restaurants/user/${this.props.group.id}`)
      .then((res) => {
        this.setState({
          restaurants: res.data.rows
        })
      })
      .catch(() => {
        this.setState({
          restaurants: false
        })
      })
  }

  handleVote (bool) {
    axios.get(`/user_groups/${this.props.group.id}`)
      .then((res) => {
        return axios.post('/votes', {
          restaurant_id: this.state.restaurants[0].id,
          user_group_id: res.data[0].id,
          acceptance: bool
        })
      })
      .then((res) => {
        console.log('it worked', res)
        if (this.state.restaurants.length === 1) {
          this.setState({
            restaurants: false
          })
        } else {
          const newRestaurants = this.state.restaurants.slice(1)
          this.setState({
            restaurants: newRestaurants
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render () {
    return (
      <div className='group-vote'>
        {this.state.restaurants
          ? <div>
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
          : <div>There are no restaurants left to vote on</div>
        }
      </div>
    )
  }
}

module.exports = GroupVote
