import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import axios from 'axios'
import './signup.css'

function validate (first_name, last_name, email, password, password_confirm) {
  // true means invalid
  return {
    first_name: first_name.length === 0,
    last_name: last_name.length === 0,
    email: email.length === 0,
    password: password.length === 0,
    password_confirm: password !== password_confirm
  }
}

class SignUpForm extends Component {
  constructor () {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirm: '',

      everFocusedFirstName: false,
      everFocusedEmail: false,
      everFocusedPassword: false,
      everFocusedPasswordConfirm: false,
      inFocus: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.canBeSubmitted = this.canBeSubmitted.bind(this)
  }

  handleChange ({ target }) {
    if (target.name) {
      this.setState({
        [target.name]: target.value
      })
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    if (!this.canBeSubmitted()) {
      event.preventDefault()
      return
    }

    const { first_name, last_name, email, password, password_confirm } = this.state
    const user = {
      first_name,
      last_name,
      email,
      password
    }

    axios.post('/users', user)
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          browserHistory.push('/profile')
        }
      })
        .catch(error => {
          console.log(error)
          alert(error)
        })
    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirm: ''
    })
  }

  canBeSubmitted () {
    const errors = validate(this.state.first_name, this.state.last_name, this.state.email, this.state.password, this.state.password_confirm)
    const isDisabled = Object.keys(errors).some(x => errors[x])
    return !isDisabled
  }

  render () {
    const errors = validate(this.state.first_name, this.state.last_name, this.state.email, this.state.password, this.state.password_confirm)
    const isDisabled = Object.keys(errors).some(x => errors[x])
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='first_name'>First Name:</label>
        <input
          className={errors.first_name ? 'error' : ''}
          type='text'
          placeholder='First Name'
          value={this.state.first_name}
          onChange={this.handleChange}
          name='first_name'
        />
        <label htmlFor='last_name'>Last Name:</label>
        <input
          className={errors.last_name ? 'error' : ''}
          type='text'
          placeholder='Last Name'
          value={this.state.last_name}
          onChange={this.handleChange}
          name='last_name'
        />
        <label htmlFor='email'>Email:</label>
        <input
          className={errors.email ? 'error' : ''}
          type='text'
          placeholder='Enter email'
          value={this.state.email}
          onChange={this.handleChange}
          name='email'
        />
        <label htmlFor='password'>Password:</label>
        <input
          className={errors.password ? 'error' : ''}
          type='password'
          placeholder='Enter password'
          value={this.state.password}
          onChange={this.handleChange}
          name='password'
        />
        <label htmlFor='password_confirm'>Confirm Password:</label>
        <input
          className={errors.password_confirm ? 'error' : ''}
          type='password'
          placeholder='Confirm Password'
          value={this.state.password_confirm}
          onChange={this.handleChange}
          name='password_confirm'
        />
        <button disabled={isDisabled}>Sign up</button>
      </form>
    )
  }
}

export default SignUpForm
