import React, { Component } from 'react'
import { Link } from 'react-router'
// import axios from 'axios'
import './group.css'

class Group extends Component {
  // constructor (props) {
  //   super(props)
  //
  //   this.state = {
  //     group: props.group
  //   }
  // }

  // componentDidMount () {
  //   axios.get(`/users/id`)
  //     .then((res) => {
  //       const name = `${res.data.first_name} ${res.data.last_name}`
  //       const profileUrl = res.data.profile_photo_url
  //       this.setState({ name, profileUrl })
  //       console.log(this.state.profileUrl)
  //       return axios.get(`/groups/user`)
  //     })
  //     .then((response) => {
  //       this.setState({ groups: response.data })
  //     })
  //     .catch((err) => {
  //       console.log('it failed', err)
  //     })
  // }

  render () {
    return (
      <div className='group'>
        <div className='group-main'>
          <header className='group-head'>
            <Link to='/group' className='group-tab'>Group Page</Link>
            <Link to='/group/vote' className='group-tab'>Vote</Link>
          </header>
          {React.cloneElement(this.props.children, {
            group: this.props.group
          })}
        </div>
      </div>
    )
  }
}

module.exports = Group
