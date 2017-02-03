import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  authButton() {
    if(this.props.authenticated) {
      return (
        <button
          onClick={() => { this.props.authenticate(false); }}
          className="btn btn-danger">Sign out</button>
      );
    }

    return (
      <button
        onClick={() => { this.props.authenticate(true); }}
        className="btn btn-primary">Sign in</button>
    );
  }

  render() {
    return (
      <header className='header'>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/resources">Resources</Link>
            </li>
            <li className="nav-item">
              {this.authButton()}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
}

export default  connect(mapStateToProps, actions)(Header);
