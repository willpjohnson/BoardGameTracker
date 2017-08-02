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
    this.props.fetchCatanGames(this.props.userId)
  }

  toggleGames(e) {
    e.preventDefault();
    if (this.state.className === "catan-index-ul hidden") {
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
        <h1 className="catan-index-header" onClick={this.toggleGames}>Catan</h1>
        <h2>Stats</h2>


        <h3>Games</h3>
        <ul className={this.state.className}>
          {games}
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
