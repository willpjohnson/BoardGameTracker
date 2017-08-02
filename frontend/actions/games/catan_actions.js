import * as APIUtil from '../../util/games/catan_api_util';

export const RECEIVE_CATAN_GAMES = "RECEIVE_CATAN_GAMES";
export const RECEIVE_CATAN_GAME = "RECEIVE_CATAN_GAME";

export const fetchCatanGames = (userId) => dispatch => {
  return APIUtil.fetchCatanGames(userId).then( (games) => {
    return dispatch(receiveCatanGames(games));
  });
};

export const fetchCatanGame = gameId => dispatch => {
  return APIUtil.fetchCatanGame(gameId).then( (game) => {
    return dispatch(receiveCatanGame(game));
  })
};

export const receiveCatanGames = (games) => {
  return({
    type: RECEIVE_CATAN_GAMES,
    games
  });
};

export const receiveCatanGame = (game) => {
  return({
    type: RECEIVE_CATAN_GAME,
    game
  });
};
