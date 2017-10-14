import Axios from 'axios';

import { etherumAPI } from '../utils/api.js';

export const fetchEtherum = () => {
  return dispatch => {
    dispatch({type: 'FETCH_ETHERUM'})
    Axios.get(etherumAPI)
      .then((res) => {
        dispatch({
          type: 'FETCH_ETHERUM_SUCCESS',
          payload: res.data.ticker
        })
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_ETHERUM_ERROR',
          payload: error
        })
      })
  }
}
