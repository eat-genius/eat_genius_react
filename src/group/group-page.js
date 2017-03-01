import React, { Component } from 'react'
// import { Link } from 'react-router'
// import axios from 'axios'
import './group-page.css'

class GroupPage extends Component {
  // constructor (props) {
  //   super(props)
  //
  //   this.state = {
  //     group: props.group
  //   }
  //
  //   console.log(props.group.people)
  // }

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
          <div className='group-page-places'>places</div>
          <div className='group-page-map'>Map</div>
        </div>
      </div>
    )
  }
}

module.exports = GroupPage
