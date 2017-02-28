import React from 'react'
import './add-people.css'

class AddPeople extends React.Component {
  render () {
    return (
      <div className='add-people-main'>
        <label>Search People: <input type='text' /></label>
      </div>
    )
  }
}

module.exports = AddPeople
