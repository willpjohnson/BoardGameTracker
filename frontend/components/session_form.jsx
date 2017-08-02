import React from 'react';
import { Link, Route } from 'react-router-dom';
import { withRouter, Redirect } from 'react-router';
import { connect } from 'react-redux';

import { login, signup } from '../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleExit(e) {
    e.preventDefault();
    this.props.history.replace(this.props.location.pathname);
  }

  handleSubmit(e) {
    e.preventDefault();
    let that = this;
    this.props.process({user: this.state}).then( (response) => {
      that.props.history.push(`/`);
    });
  }

  render() {
    let formText;
    if (this.props.formType === "login") {
      formText = "Log In";
    } else if (this.props.formType === "signup") {
      formText = "Sign Up";
    }

    return(
      <div className="session-form-div">
        <i className="fa fa-times" aria-hidden="true" onClick={this.handleExit}></i>
        <h1>{formText}</h1>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <input
            className="session-form-input"
            onChange={this.update("username")}
            type="text"
            value={this.state.username}
            placeholder="Username"
          /><br />
          <input
            className="session-form-input"
            onChange={this.update("password")}
            type="password"
            value={this.state.password}
            placeholder="Password"
          /><br />
        <button className="session-form-button">{formText}</button>
        </form>
      </div>
    );
  }
}


// CONTAINER
const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.formType;
  return({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  switch (ownProps.formType) {
    case 'login':
      return({
        process: (user) => dispatch(login(user))
      });
    case 'signup':
      return({
        process: (user) => dispatch(signup(user))
      });
    default:
      return({

      });
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
