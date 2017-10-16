import Axios from 'axios';

import {
  bitcoinDB,
  etherumDB,
  litecoinDB,
  rippleDB,
  wavesDB,
  zonkDB
} from '../utils/api.js';

export const buyingBase = (coin, amount, param) => {
  return dispatch => {
    dispatch({type: 'ACTIVATED_BASE', payload: param})
    dispatch({
      type: 'BUYING_BASE',
      coin: coin,
      amount: amount
    })
  }
}

export const sellingBase = (coin, amount) => {
  return dispatch => {
    dispatch({type: 'ACTIVATED_BASE'})
    dispatch({
      type: 'SELLING_BASE',
      coin: coin,
      amount: amount
    })
  }
}

export const resetBase = () => {
  return dispatch => {
    dispatch({type: 'DEACTIVATED_BASE'})
  }
}

export const fetchBitcoinBase = () => {
  return dispatch => {
    Axios.get(bitcoinDB)
    .then((res) => {
      dispatch({
        type: 'FETCH_BITCOIN_BASE',
        payload: res.data
      })
    })
    .catch((error) => {
      dispatch({
        type: 'FETCH_BITCOIN_BASE_ERROR',
        payload: error
      })
    })
  }
}

export const fetchEtherumBase = () => {
  return dispatch => {
    Axios.get(etherumDB)
    .then((res) => {
      dispatch({
        type: 'FETCH_ETHERUM_BASE',
        payload: res.data
      })
    })
    .catch((error) => {
      dispatch({
        type: 'FETCH_ETHERUM_BASE_ERROR',
        payload: error
      })
    })
  }
}

export const fetchLitecoinBase = () => {
  return dispatch => {
    Axios.get(litecoinDB)
    .then((res) => {
      dispatch({
        type: 'FETCH_LITECOIN_BASE',
        payload: res.data
      })
    })
    .catch((error) => {
      dispatch({
        type: 'FETCH_LITECOIN_BASE_ERROR',
        payload: error
      })
    })
  }
}

export const fetchRippleBase = () => {
  return dispatch => {
    Axios.get(rippleDB)
    .then((res) => {
      dispatch({
        type: 'FETCH_RIPPLE_BASE',
        payload: res.data
      })
    })
    .catch((error) => {
      dispatch({
        type: 'FETCH_RIPPLE_BASE_ERROR',
        payload: error
      })
    })
  }
}

export const fetchWavesBase = () => {
  return dispatch => {
    Axios.get(wavesDB)
    .then((res) => {
      dispatch({
        type: 'FETCH_WAVES_BASE',
        payload: res.data
      })
    })
    .catch((error) => {
      dispatch({
        type: 'FETCH_WAVES_BASE_ERROR',
        payload: error
      })
    })
  }
}

export const fetchZonkBase = () => {
  return dispatch => {
    Axios.get(zonkDB)
    .then((res) => {
      dispatch({
        type: 'FETCH_ZONK_BASE',
        payload: res.data
      })
    })
    .catch((error) => {
      dispatch({
        type: 'FETCH_ZONK_BASE_ERROR',
        payload: error
      })
    })
  }
}
