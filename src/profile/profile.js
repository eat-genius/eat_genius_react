import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import axios from 'axios'
import Breadcrumb from '../Breadcrumb'
import './profile.css'

class Profile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      profileUrl: '',
      groups: [],
      joinedOn: '',
      email: '',
      userId: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    axios.get('/users/id')
      .then((res) => {
        const name = `${res.data.first_name} ${res.data.last_name}`
        const profileUrl = res.data.profile_photo_url
        const email = res.data.email
        const joinedOn = res.data.created_at.slice(0, 10)
        const userId = res.data.id
        this.setState({ name, profileUrl, joinedOn, email, userId })
        return axios.get(`/groups/user`)
      })
      .then((response) => {
        this.setState({ groups: response.data })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  handleClick (group) {
    const newGroup = group
    axios.get(`/group/users/${group.id}`)
      .then((res) => {
        newGroup.people = res.data
        this.props.updateGroup(newGroup)
        browserHistory.push('/group')
      })
      .catch((err) => {
        console.log('itfailed', err)
      })
  }

  render () {
    return (
      <div className='container target'>
        <ol className='breadcrumb'>
    <li><Link to='/'>Home</Link></li>
    <li className='active'>Profile</li>
  </ol>
        <div className='row'>
          <div className='col-sm-10'>
            <h1>{this.state.name}</h1>
            <button type='button' className='btn btn-info' style={{marginBottom: '1%'}}>Send me a message</button>
            <br />
          </div>
          <div className='col-sm-2'>
            <img title='profile image' className='img-thumbnail img-responsive' src={this.state.profileUrl} />
          </div>
        </div>
        <br />
        <div className='row'>
          <div className='col-sm-3'>
            {/* <!--left col--> */}
            <ul className='list-group'>
              <li className='list-group-item text-muted'>Profile</li>
              <li className='list-group-item text-right'><span className='pull-left'><strong>Joined</strong></span> {this.state.joinedOn}</li>
              <li className='list-group-item text-right'><span className='pull-left'><strong>User ID</strong></span> {this.state.userId}</li>
              <li className='list-group-item text-right'><span className='pull-left'><strong>Real name</strong></span> {this.state.name}
              </li>
              <li className='list-group-item text-right'><span className='pull-left'><strong>Email</strong></span> {this.state.email}</li>
              <li className='list-group-item text-right'><span className='pull-left'><strong>City: </strong></span> Seattle
              </li>
            </ul>

            <ul className='list-group'>
              <li className='list-group-item text-muted'>Activity <i className='fa fa-dashboard fa-1x' />
              </li>
              <li className='list-group-item text-right'><span className='pull-left'><strong>Shares</strong></span> 125</li>
              <li className='list-group-item text-right'><span className='pull-left'><strong>Likes</strong></span> 13</li>
              <li className='list-group-item text-right'><span className='pull-left'><strong>Posts</strong></span> 37</li>
              <li className='list-group-item text-right'><span className='pull-left'><strong>Followers</strong></span> 78</li>
            </ul>
            <div className='panel panel-default'>
              <div className='panel-heading' >Social Media Links</div>
              <div className='panel-body' style={{ display: 'flex', justifyContent: 'space-between'}}>
                <i className='fa fa-facebook fa-2x text-center hover' /> <i className='fa fa-github fa-2x text-center' />
                <i className='fa fa-twitter fa-2x text-center' /> <i className='fa fa-pinterest fa-2x' /> <i className='fa fa-google-plus fa-2x text-center' />
              </div>
            </div>
          </div>
          <div className='col-sm-9'>
            <div className='panel panel-default'>
              <div className='panel-heading'>{this.state.name}'s Bio</div>
              <div className='panel-body'> A long description about me.
              </div>
            </div>
            <div className='panel panel-default target'>
              <div className='panel-heading'>{this.state.name}'s Groups</div>
              <div className='panel-body'>
                <div className='row'>
                  <div className='btn-toolbar'>
                    <Link to='newGroup' className='btn btn-primary btn-sm pull-right' style={{ marginBottom: '1%', marginRight: '1%' }}>New Group</Link>
                  </div>
                  <div className='well'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Group Name</th>
                          <th>Searching For</th>
                          <th>Location</th>
                          <th style={{ width: '36px' }} />
                        </tr>
                      </thead>
                      <tbody>
                        { this.state.groups.map((group) => {
                          return (
                            <tr key={group.id} onClick={() => this.handleClick(group)}><td>{group.id}</td><td className='profile-td'>{group.name}</td><td>{group.search}</td><td>{group.location}</td></tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='push' />
        </div>
        <footer id='footer'>
          <div className='row-fluid'>
            <div className='span3'>
              <span className='pull-right'>©Copyright 2017 Eat Genius, Inc. </span>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

module.exports = Profile
