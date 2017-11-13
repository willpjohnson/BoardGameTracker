import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCatanGames } from '../../actions/games/catan_actions';
import { fetchCatanPerformances } from '../../actions/performances/catan_actions';

import { addRow } from '../../shared_functions';

class UserShowCatan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gamesClassName: "catan-index-table hidden",
      rowsAdded: false
    }

    this.toggleGames = this.toggleGames.bind(this);
  }

  componentDidMount() {
    this.props.fetchCatanGames(this.props.userId);
    this.props.fetchCatanPerformances(this.props.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.performances.length === 0 && nextProps.performances.length !== 0) {
      nextProps.performances.forEach( (perf, idx) => {
        let evenOrOdd = (idx % 2 === 0);
        addRow("catan-index-table", "catan-index-table-row", [perf.date.toString(), (perf.winner ? "X" : ""),
          perf.points, perf.roads, perf.settlements, perf.cities, perf.dcs, perf.harbors, perf.order], evenOrOdd);
      });
    }
  }

  toggleGames(e) {
    e.preventDefault();
    if (this.state.gamesClassName === "catan-index-table hidden") {
      this.setState({gamesClassName: "catan-index-table"})
    } else {
      this.setState({gamesClassName: "catan-index-table hidden"})
    }
  }

  render() {
    let totalStats = this.props.totalStats;
    return(
      <div className="catan-index-div">
        <h1 className="user-show-game-index-header" onClick={this.toggleGames}>Catan</h1>
        <table className={this.state.gamesClassName}>
          <tbody className="catan-index-table-body">
            <tr className="catan-index-table-row">
              <th></th>
              <th>Wins</th>
              <th>Points</th>
              <th>Roads</th>
              <th>Settlements</th>
              <th>Cities</th>
              <th>DCs</th>
              <th>Harbors</th>
              <th>Order</th>
            </tr>
            <tr className="catan-index-table-row">
              <td>Career Average</td>
              <td>{`${Math.round(10000*totalStats.wins/totalStats.games)/100}%`}</td>
              <td>{Math.round(100*totalStats.points/totalStats.games)/100}</td>
              <td>{Math.round(100*totalStats.roads/totalStats.games)/100}</td>
              <td>{Math.round(100*totalStats.settlements/totalStats.games)/100}</td>
              <td>{Math.round(100*totalStats.cities/totalStats.games)/100}</td>
              <td>{Math.round(100*totalStats.dcs/totalStats.games)/100}</td>
              <td>{Math.round(100*totalStats.harbors/totalStats.games)/100}</td>
              <td>{Math.round(100*totalStats.order/totalStats.games)/100}</td>
            </tr>
            <tr className="catan-index-table-row">
              <td>Career Total</td>
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
    games: state.catan.index,
    performances: state.user.game_performances.catan_performances
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
