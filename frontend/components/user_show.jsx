import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchUser } from '../actions/user_actions';

import UserShowCatan from './user_show_games/catan_games';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.id_wildcard)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.id_wildcard !== nextProps.id_wildcard) {
      this.props.fetchUser(nextProps.id_wildcard)
    }
  }

  render() {
    let headToHead = (this.props.user.id !== this.props.currentUser.id) ?
      (<Link to={`/users/${this.props.user.id}/vs/${this.props.currentUser.id}`}>Head To Head</Link>) : (<div></div>)

    if (this.props.user.id == this.props.id_wildcard) {
      return(
        <div className="user-show-div">
          <h1 className="user-show-headline">{this.props.user.username}</h1>
          {headToHead}

          <div className="user-show-games-div">
            <UserShowCatan totalStats={this.props.games.catan_stats} userId={this.props.user.id}/>
          </div>
        </div>
      );
    } else {
      return(
        <div className="loader"></div>
      )
    }
  }
}


// CONTAINER
const mapStateToProps = (state, ownProps) => {
  return({
    currentUser: state.session.currentUser,
    user: state.user.user_info,
    games: state.user.game_stats,
    id_wildcard: parseInt(ownProps.match.params.id)
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchUser: (id) => {
      dispatch(fetchUser(id));
    }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
