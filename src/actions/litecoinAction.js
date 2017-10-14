import Axios from 'axios';

import { litecoinAPI } from '../utils/api.js';

export const fetchLitecoin = () => {
  return dispatch => {
    dispatch({type: 'FETCH_LITECOIN'})
    Axios.get(litecoinAPI)
      .then((res) => {
        dispatch({
          type: 'FETCH_LITECOIN_SUCCESS',
          payload: res.data.ticker
        })
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_LITECOIN_ERROR',
          payload: error
        })
      })
  }
}
