import React from 'react'
import { Link } from 'react-router'

const Breadcrumb = () =>
  <ol className='breadcrumb'>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='profile'>Profile</Link></li>
    <li className='active'>Data</li>
  </ol>

export default Breadcrumb
