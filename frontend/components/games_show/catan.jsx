import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { dateParse } from '../../shared_functions';

import { fetchCatanGame } from '../../actions/games/catan_actions';

class CatanGame extends React.Component {
  constructor(props) {
    super(props);

    this.renderPerformances = this.renderPerformances.bind(this);
    this.renderLeaders = this.renderLeaders.bind(this);
  }

  componentDidMount() {
    this.props.fetchCatanGame(this.props.id_wildcard)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.id_wildcard !== nextProps.id_wildcard) {
      this.props.fetchCatanGame(nextProps.id_wildcard)
    }
  }

  renderLeaders() {
    let winner = (<div></div>);
    let longest_road = (<div></div>);
    let largest_army = (<div></div>);
    this.props.performances.forEach( (perf) => {
      if (perf.winner) winner = (<h2>{perf.username} wins!</h2>);
      if (perf.longest_road) longest_road = (<h2>{perf.username} had Longest Road.</h2>);
      if (perf.largest_army) largest_army = (<h2>{perf.username} had Largest Army.</h2>);
    });
    return(
      <div className="catan-show-leaders">
        {winner}
        {longest_road}
        {largest_army}
      </div>
    );
  }

  renderPerformances() {
    let perfs = [];
    this.props.performances.forEach( (perf, idx) => {
      let winner = "";
      if (perf.winner) {
        winner = "-winner";
      }
      perfs.push(
        <li key={idx}>
          <Link className="catan-show-performance-username-link" to={`/users/${perf.player_id}`}>
            <h2 className={`catan-show-performance-username${winner}`}>{perf.username}</h2>
          </Link>
          <ul className="catan-show-performance-stats">
            <li>Points: {perf.points}</li>
            <li>Order: {perf.order}</li>
            <li>Roads: {perf.roads}</li>
            <li>Settlements: {perf.settlements}</li>
            <li>Cities: {perf.cities}</li>
            <li>DCs: {perf.dcs}</li>
            <li>Harbors: {perf.harbors}</li>
          </ul>
        </li>
      );
    });
    return perfs;
  }

  render() {
    if (this.props.data.id === this.props.id_wildcard) {
      return(
        <div className="catan-show-div">
          <h1 className="catan-show-date">{dateParse(this.props.data.date)}</h1>
          {this.renderLeaders()}
          <ul className="catan-show-performances-ul">
            {this.renderPerformances()}
          </ul>
        </div>
      );
    } else {
      return(<div className="loader"></div>)
    }
  }
}


// CONTAINER
const mapStateToProps = (state, ownProps) => {
  return({
    id_wildcard: parseInt(ownProps.match.params.id),
    data: state.catan.show.data,
    performances: state.catan.show.performances
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchCatanGame: (gameId) => {
      dispatch(fetchCatanGame(gameId));
    }
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatanGame);
