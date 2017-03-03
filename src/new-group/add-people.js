import axios from 'axios'
import { browserHistory } from 'react-router'
import React from 'react'
import './add-people.css'

class AddPeople extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      people: [],
      group: this.props.group,
      searchTerm: '',
      dropDownValue: 'first_name'
    }

    this.addMember = this.addMember.bind(this)
    this.removeMember = this.removeMember.bind(this)
    this.onSearchTermChange = this.onSearchTermChange.bind(this)
    this.onDropDownChange = this.onDropDownChange.bind(this)
    this.isSearched = this.isSearched.bind(this)
    this.createGroup = this.createGroup.bind(this)
  }

  componentDidMount () {
    axios.get('/users')
      .then((res) => {
        this.setState({
          people: res.data
        })
      })
      .catch((err) => {
        console.log('it failed', err)
      })
  }

  addMember (person) {
    const newMember = this.state.people.filter(ele => ele.id === person.id)[0]
    const newPeople = this.state.people.filter(ele => ele.id !== person.id)
    const newGroup = this.state.group
    if (!newGroup.hasOwnProperty('people')) {
      newGroup.people = []
    }
    newGroup.people.push(newMember)
    this.setState({
      group: newGroup,
      people: newPeople
    })
  }

  removeMember (person) {
    const oldGroup = this.state.group
    const newMembers = oldGroup.people.filter(ele => ele.id !== person.id)
    const newPeople = this.state.people
    const newGroup = {
      name: oldGroup.name,
      location: oldGroup.location,
      search: oldGroup.search,
      people: newMembers
    }
    newPeople.push(person)
    this.setState({
      group: newGroup,
      people: newPeople
    })
  }

  onDropDownChange (event) {
    this.setState({dropDownValue: event.target.value})
  }

  onSearchTermChange (event) {
    this.setState({ searchTerm: event.target.value })
  }

  isSearched (searchTerm, dropDownValue) {
    return (item) => {
      return !searchTerm || item[dropDownValue].toLowerCase().includes(searchTerm.toLowerCase())
    }
  }

  createGroup () {
    const newGroup = {
      name: this.state.group.name,
      location: this.state.group.location,
      search: this.state.group.search,
      people: this.state.group.people
    }
    axios.post('/groups', newGroup)
      .then((res) => {
        newGroup.id = res.data[0]
        return axios.post('/yelp', {
          groupLoc: newGroup.location,
          search: newGroup.search
        })
      })
      .then((response) => {
        if (response.data.length === 0) {
          throw new Error('Your search terms returned no results')
        }
        // console.log('still in then')
        const restaurantsObj = { restaurants: response.data }
        for (const restaurant of restaurantsObj.restaurants) {
          restaurant.group_id = newGroup.id
          restaurant.postal_code = Number.parseInt(restaurant.postal_code)
        }
        return axios.post('/restaurants', restaurantsObj)
      })
      .then((res) => {
        console.log('it worked', res)
      })
      .catch((err) => {
        console.log(err)
      })
    browserHistory.push('/profile')
  }

  render () {
    return (
      <div className='container'>
        <div className='col-md-12'>
          <table className='table table-hover table-striped'>
            <thead>
              <th colSpan='3' className='text-center'>Your Group Members</th><th><button className='btn btn-success btn-small' onClick={this.createGroup} style={{marginBottom: '1%'}}>Create Group</button>
              </th>
            </thead>
            <tbody>
              { this.state.group.people.map((person) => {
                return (
                  <tr key={person.id}>
                    <td>
                      <img src={person.profile_photo_url} className='img-circle' width='60' />
                    </td>
                    <td><h4>{person.first_name}</h4></td>
                    <td><h4>{person.last_name}</h4></td>
                    <td><button onClick={() => this.removeMember(person)} type='button' className='btn btn-danger btn-sm'><span className='glyphicon glyphicon-remove' /></button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className='section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-md-offset-3'>
                <label>Search Users: <input onChange={this.onSearchTermChange} /></label>
                <select onChange={this.onDropDownChange}>
                  <option value='first_name' defaultValue>First Name</option>
                  <option value='last_name'>Last Name</option>
                </select>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <table className='table table-hover table-striped'>
                  <thead><th colSpan='3' className='text-center'>Add Your Friends to Your Group</th></thead>
                  <tbody>
                    { this.state.people.filter(this.isSearched(this.state.searchTerm, this.state.dropDownValue)).map((person) => {
                      console.log(person)
                      return (
                        <tr key={person.id}>
                          <td>
                            <img src={person.profile_photo_url} className='img-circle' width='60' />
                          </td>
                          <td><h4>{person.first_name}</h4></td>
                          <td><h4>{person.last_name}</h4></td>
                          <td><button onClick={() => this.addMember(person)} type='button' className='btn btn-success btn-sm'><span className='glyphicon glyphicon-plus-sign' /></button>
                          </td>
                        </tr>
                      )
                    })}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = AddPeople
