export const fetchCatanGames = (userId) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/users/${userId}/catan_games`
    })
  );
};

export const fetchCatanGame = (gameId) => {
  return(
    $.ajax({
      method: 'GET',
      url: `/api/catan_games/${gameId}`
    })
  );
};
