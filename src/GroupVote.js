import React, { Component } from 'react'
import axios from 'axios'

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
      <div className='col-sm-12 container-fluid'>
        <div className='row container-fluid'>
          {this.state.restaurants
            ? <div className='col-sm-12 col-md-6 col-md-offset-3' style={{border: 'solid black 2px', marginTop: '10', marginBottom: '10', height: '400'}}>
              <div className='container-fluid' style={{height: '350'}}>
                <div className='row'>
                  <div className='col-sm-7'>{this.state.restaurants[0].name}</div>
                  <img className='col-sm-5' src={this.state.restaurants[0].img_url} />
                </div>
                <div className='row'>rating: {this.state.restaurants[0].rating}</div>
                <div className='row'>description: {this.state.restaurants[0].description}</div>
              </div>
              <div className='container-fluid row' style={{display: 'flex', justifyContent: 'space-around'}}>
                <button className='btn btn-success' onClick={() => this.handleVote(true)}>Yes</button>
                <button className='btn btn-danger' onClick={() => this.handleVote(false)}>No</button>
              </div>
            </div>
            : <div>There are no restaurants left to vote on</div>
          }
        </div>
      </div>
    )
  }
}

module.exports = GroupVote
