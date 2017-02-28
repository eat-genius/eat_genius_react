import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import axios from 'axios'

function validate (email, password) {
  // true means invalid
  return {
    email: email.length === 0,
    password: password.length < 8
  }
}

class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    const { email, password } = this.state
    const user = {
      email,
      password
    }
    axios.post('/token', user)
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          browserHistory.push('/profile')
        }
      })
      .catch(error => {
        console.log(error)
        alert('Unknown Email Or Password')
      })
  }

  canBeSubmitted () {
    const errors = validate(this.state.email, this.state.password)
    const isDisabled = Object.keys(errors).some(x => errors[x])
    return !isDisabled
  }

  render () {
    const errors = validate(this.state.email, this.state.password)
    const isDisabled = Object.keys(errors).some(x => errors[x])
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
          <button disabled={isDisabled}>Login</button>
        </form>
      </div>
    )
  }
}

export default LoginForm
