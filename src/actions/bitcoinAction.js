import Axios from 'axios';

import { bitcoinAPI } from '../utils/api.js';

export const fetchBitcoin = () => {
  return dispatch => {
    dispatch({type: 'FETCH_BITCOIN'})
    Axios.get(bitcoinAPI)
      .then((res) => {
        dispatch({
          type: 'FETCH_BITCOIN_SUCCESS',
          payload: res.data.ticker
        })
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_BITCOIN_ERROR',
          payload: error
        })
      })
  }
}
