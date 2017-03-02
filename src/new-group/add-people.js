import axios from 'axios'
import { browserHistory } from 'react-router'
import React from 'react'
import './add-people.css'

class AddPeople extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      people: [],
      group: this.props.group
    }

    this.addMember = this.addMember.bind(this)
    this.removeMember = this.removeMember.bind(this)
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
    const newGroup = this.state.group
    if (!newGroup.hasOwnProperty('people')) {
      newGroup.people = []
    }
    newGroup.people.push(newMember)
    this.setState({ group: newGroup })
  }

  removeMember (person) {
    const oldGroup = this.state.group
    const newMembers = oldGroup.people.filter(ele => ele.id !== person.id)
    const newGroup = {
      name: oldGroup.name,
      location: oldGroup.location,
      search: oldGroup.search,
      people: newMembers
    }
    this.setState({ group: newGroup })
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
        console.log('it failed', err)
      })
    browserHistory.push('/profile')
  }

  render () {
    return (
      <div className='container'>
        <div className='section'>
          {/* <div className='container'>
            <div className='row'>
              <div className='col-md-12 well'>
                <button className='btn btn-primary' onClick={this.createGroup}>Create Group</button>
              </div>
            </div>
          </div> */}
        </div>
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
              <div className='col-md-12'>
                <table className='table table-hover table-striped'>
                  <thead><th colSpan='3' className='text-center'>Add Your Friends to Your Group</th></thead>
                  <tbody>
                    { this.state.people.map((person) => {
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
            <div class='row' />
          </div>
        </div>
        <div className='fade modal' id='usuario'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button type='button' className='close' data-dismiss='modal' aria-hidden='true'>×</button>
                <h2 className='modal-title' id='myModalLabel'>Nuevo Usuario</h2>
              </div>
              <div className='modal-body'>
                <form className='form-horizontal'>
                  <fieldset>

                    <div className='form-group'>
                      <label className='col-md-4 control-label' for='prependedtext'>Usuario</label>
                      <div className='col-md-5'>
                        <div className='input-group'>
                          <span className='input-group-addon'>@</span>
                          <input id='prependedtext' name='prependedtext' className='form-control' placeholder='Nombre de usuario' type='text' required='' />
                        </div>
                      </div>
                    </div>
                    <div className='form-group'>
                      <label className='col-md-4 control-label' for='nombre'>Nombre</label>
                      <div className='col-md-5'>
                        <div className='input-group'>
                          <span className='input-group-addon'>
                            <i className='fa fa-user' />
                          </span>
                          <input id='nombre' name='nombre' className='form-control' placeholder='Nombre Completo' type='text' required='' />
                        </div>
                      </div>
                    </div>
                    <div className='form-group'>
                      <label className='col-md-4 control-label' for='email'>e-mail</label>
                      <div className='col-md-5'>
                        <div className='input-group'>
                          <input id='email' name='email' className='form-control' placeholder='Correo Electrónico' type='email' required='' />
                          <span className='input-group-addon'>
                            <i className='fa fa-envelope' />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='form-group'>
                      <label className='col-md-4 control-label' for='departamento'>Departamento</label>
                      <div className='col-md-5'>
                        <select id='departamento' name='departamento' className='form-control'>
                          <option value='1'>Sistemas</option>
                          <option value='2'>Ama de Llaves</option>
                          <option value='3'>Recursos Humanos</option>
                          <option value='4'>Contraloría</option>
                          <option value='5'>Gerencia</option>
                        </select>
                      </div>
                    </div>
                    <div className='form-group'>
                      <label className='col-md-4 control-label' for='password'>Contraseña</label>
                      <div className='col-md-5'>
                        <input id='password' name='password' type='password' placeholder='Contraseña' className='form-control input-md' required='' />
                      </div>
                      <button type='submit' className='btn btn-primary'>
                        <i className='fa fa-fw fa-save' />Guardar</button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = AddPeople
