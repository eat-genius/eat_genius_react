import React from 'react';
import { Link } from 'react-router';
import './navbar.css';

class Navbar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <nav>
          <h1>Eat Genius</h1>
          <Link className="navlink" to="signup">Signup</Link>
        </nav>
        {React.cloneElement(this.props.children)}
      </div>
    )
  }
}

module.exports = Navbar;
