import Axios from 'axios';

import { wavesAPI } from '../utils/api.js';

export const fetchWaves = () => {
  return dispatch => {
    dispatch({type: 'FETCH_WAVES'})
    Axios.get(wavesAPI)
      .then((res) => {
        dispatch({
          type: 'FETCH_WAVES_SUCCESS',
          payload: res.data.ticker
        })
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_WAVES_ERROR',
          payload: error
        })
      })
  }
}
