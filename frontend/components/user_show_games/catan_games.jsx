import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCatanGames } from '../../actions/games/catan_actions';

class UserShowCatan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gamesClassName: "catan-index-ul hidden"
    }

    this.toggleGames = this.toggleGames.bind(this);
  }

  componentDidMount() {
    this.props.fetchCatanGames(this.props.userId);
  }

  toggleGames(e) {
    e.preventDefault();
    if (this.state.gamesClassName === "catan-index-ul hidden") {
      this.setState({gamesClassName: "catan-index-ul"})
    } else {
      this.setState({gamesClassName: "catan-index-ul hidden"})
    }
  }


  render() {
    let games = [];
    this.props.catanGames.forEach( (game, idx) => {
      games.push(<li key={idx}><Link to={`/catan_games/${game.id}`}>{game.date}</Link></li>)
    })

    return(
      <div className="catan-index-div">
        <h1 className="user-show-game-index-header">Catan</h1>
        <h2 className="user-show-game-view-games" onClick={this.toggleGames}>View Games</h2>
        <ul className={this.state.gamesClassName}>
          {games}
        </ul>

        <h2 className="user-show-game-stats">Stats</h2>
        <ul>
          <li>Games: {this.props.stats.games}</li>
        </ul>

      </div>
    );
  }
}


// CONTAINER
const mapStateToProps = (state, ownProps) => {
  return({
    catanGames: state.catan.index
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchCatanGames: (userId) => {
      dispatch(fetchCatanGames(userId));
    }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShowCatan);
