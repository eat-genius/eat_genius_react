import { Link } from 'react-router'
import React, { Component } from 'react'
import './profile.css'

class Profile extends Component {
  render () {
    return (
      <div className='profile-page'>
        <header className='profile-head'>
          <div className='edit'><Link to='#'>Edit</Link></div>
          <div className='profile-header'>
            <div className='profile-pic'>
              <i className='material-icons'>person</i>
            </div>
            <div className='profile-name'>First Last</div>
          </div>
        </header>
        <main className='profile-main'>
          <table className='profile-table'>
            <thead>
              <tr><th className='profile-th'>Groups<Link to='newGroup'><i className='material-icons'>add_circle_outline</i></Link></th></tr>
            </thead>
            <tbody>
              <tr><td className='profile-td'>Ballard Bombers</td></tr>
              <tr><td className='profile-td'>Magnolia Magicians</td></tr>
              <tr><td className='profile-td'>Magnolia Magicians</td></tr>
              <tr><td className='profile-td'>Capital Hill Captains</td></tr>
              <tr><td className='profile-td'>Fremont Freaks</td></tr>
              <tr><td className='profile-td'>Wallingford Walleyes</td></tr>
              <tr><td className='profile-td'>Queen Anne Queries</td></tr>
            </tbody>
          </table>
        </main>
      </div>
    )
  }
}

module.exports = Profile
