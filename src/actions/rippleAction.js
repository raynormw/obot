import Axios from 'axios';

import { rippleAPI } from '../utils/api.js';

export const fetchRipple = () => {
  return dispatch => {
    dispatch({type: 'FETCH_RIPPLE'})
    Axios.get(rippleAPI)
      .then((res) => {
        dispatch({
          type: 'FETCH_RIPPLE_SUCCESS',
          payload: res.data.ticker
        })
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_RIPPLE_ERROR',
          payload: error
        })
      })
  }
}
