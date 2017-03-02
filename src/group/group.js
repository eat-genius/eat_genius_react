import React, { Component } from 'react'
import { Link } from 'react-router'
import './group.css'

class Group extends Component {

  render () {
    return (
      <div className='container panel panel-default' style={{margin: 0}}>
        <div className='panel-heading container-fluid row'>
          <Link to='/group' className='col-sm-6 group-tab'>Group Page</Link>
          <Link to='/group/vote' className='col-sm-6 group-tab'>Vote</Link>
        </div>
        <div className='container-fluid row'>
          {React.cloneElement(this.props.children, {
            group: this.props.group
          })}
        </div>
      </div>
    )
  }
}

module.exports = Group
