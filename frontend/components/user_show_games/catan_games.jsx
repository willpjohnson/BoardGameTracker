import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCatanGames } from '../../actions/games/catan_actions';
import { fetchCatanPerformances } from '../../actions/performances/catan_actions';

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
    this.props.fetchCatanPerformances(this.props.userId);
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
    let totalStats = this.props.totalStats;
    return(
      <div className="catan-index-div">
        <h1 className="user-show-game-index-header" onClick={this.toggleGames}>Catan</h1>
        <table className={this.state.gamesClassName}>
          <tbody>
            <tr>
              <th></th>
              <th>Games</th>
              <th>Wins</th>
              <th>Points</th>
              <th>Roads</th>
              <th>Settlements</th>
              <th>Cities</th>
              <th>DCs</th>
              <th>Harbors</th>
              <th>Order</th>
            </tr>
            <tr>
              <td>Career Average</td>
              <td></td>
              <td>{`${Math.round(10000*totalStats.wins/totalStats.games)/100}%`}</td>
              <td>{Math.round(100*totalStats.points/totalStats.games)/100}</td>
              <td>{Math.round(100*totalStats.roads/totalStats.games)/100}</td>
              <td>{Math.round(100*totalStats.settlements/totalStats.games)/100}</td>
              <td>{Math.round(100*totalStats.cities/totalStats.games)/100}</td>
              <td>{Math.round(100*totalStats.dcs/totalStats.games)/100}</td>
              <td>{Math.round(100*totalStats.harbors/totalStats.games)/100}</td>
              <td>{Math.round(100*totalStats.order/totalStats.games)/100}</td>
            </tr>
            <tr>
              <td>Career Total</td>
              <td>{totalStats.games}</td>
              <td>{totalStats.wins}</td>
              <td>{totalStats.points}</td>
              <td>{totalStats.roads}</td>
              <td>{totalStats.settlements}</td>
              <td>{totalStats.cities}</td>
              <td>{totalStats.dcs}</td>
              <td>{totalStats.harbors}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


// CONTAINER
const mapStateToProps = (state, ownProps) => {
  return({
    catanGames: state.catan.index,
    catanPerformances: state.user.game_performances.catan_performances
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchCatanGames: (userId) => {
      dispatch(fetchCatanGames(userId));
    },
    fetchCatanPerformances: (userId) => {
      dispatch(fetchCatanPerformances(userId));
    }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShowCatan);
