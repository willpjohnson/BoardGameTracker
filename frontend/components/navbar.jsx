import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../actions/session_actions'

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleGoToUser = this.handleGoToUser.bind(this);
    this.handleGoHome = this.handleGoHome.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleGoHome(e) {
    e.preventDefault();
    this.props.history.push('/');
  }

  handleGoToUser(e) {
    e.preventDefault();
    this.props.history.push(`/users/${this.props.currentUser.id}`)
  }

  handleLogOut(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push(`/`);
  }

  userArea() {
    if (this.props.currentUser) {
      return(
        <div className="navbar-child navbar-user-div">
          <h1 className="navbar-user-div-username" onClick={this.handleGoToUser}>{this.props.currentUser.username}</h1>
          <h1 className="navbar-user-div-username" onClick={this.handleLogOut}>Log Out</h1>
        </div>
      );
    } else {
      return(
        <div className="navbar-child navbar-user-div">
          <h1><Link className="navbar-user-div-links" to={`${this.props.location.pathname}?login=true`}>LOG IN</Link></h1>
          <h1><Link className="navbar-user-div-links" to={`${this.props.location.pathname}?signup=true`}>SIGN UP</Link></h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="navbar-div">

        <div className="navbar-child navbar-logo-div">
          <h1 onClick={this.handleGoHome}>BoardGameTracker</h1>
        </div>

        {this.userArea()}
      </div>
    );
  }
}


// CONTAINER
const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar));
