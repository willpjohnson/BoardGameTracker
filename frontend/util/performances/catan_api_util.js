export const fetchCatanPerformances = (userId) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/users/${userId}/catan_performances`
    })
  );
}
