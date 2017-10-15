import Axios from 'axios';

import { zonkAPI } from '../utils/api.js';

export const fetchZonk = () => {
  return dispatch => {
    dispatch({type: 'FETCH_ZONK'})
    Axios.get(zonkAPI)
      .then((res) => {
        dispatch({
          type: 'FETCH_ZONK_SUCCESS',
          payload: res.data.ticker
        })
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_ZONK_ERROR',
          payload: error
        })
      })
  }
}
