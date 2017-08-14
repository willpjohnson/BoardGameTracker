import * as APIUtil from '../../util/performances/catan_api_util';

export const RECEIVE_CATAN_PERFORMANCES = "RECEIVE_CATAN_PERFORMANCES";

export const fetchCatanPerformances = (userId) => dispatch => {
  return APIUtil.fetchCatanPerformances(userId).then( (performances) => {
    return dispatch(receiveCatanPerformances(performances));
  });
};

export const receiveCatanPerformances = (performances) => {
  return({
    type: RECEIVE_CATAN_PERFORMANCES,
    performances
  });
};
