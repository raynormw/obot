import Axios from 'axios';

import {
  DB,
  bitcoinDB,
  etherumDB,
  litecoinDB,
  rippleDB,
  wavesDB,
  zonkDB
} from '../utils/api.js';

export const buyingBase = (coin, amount) => {
  return dispatch => {
    dispatch({type: 'START_FETCHING', payload: true})
    Axios.patch(DB + coin + '.json', {
      amount: amount,
      isActive: true,
      status: 'buy',
    })
    .then((res) => {
      dispatch({
        type: 'BUYING_BASE_SUCCESS',
        payload: res.data
      })
    })
    .catch((error) => {
      dispatch({
        type: 'BUYING_BASE_ERROR',
        payload: error
      })
    })
  }
}

export const sellingBase = (coin, amount) => {
  return dispatch => {
    dispatch({type: 'START_FETCHING', payload: true})
    Axios.patch(DB + coin + '.json', {
      amount: amount,
      isActive: true,
      status: 'sell',
    })
    .then((res) => {
      dispatch({
        type: 'SELLING_BASE_SUCCESS',
        payload: res.data
      })
    })
    .catch((error) => {
      dispatch({
        type: 'SELLING_BASE_ERROR',
        payload: error
      })
    })
  }
}

export const resetBase = (coin) => {
  return dispatch => {
    Axios.patch(DB + coin + '.json', {
      amount: 0,
      isActive: false,
      status: 'empty',
    })
    .then((res) => {
      dispatch({
        type: 'DEACTIVATED_BASE_SUCCESS',
        payload: res.data
      })
    })
    .catch((error) => {
      dispatch({
        type: 'DEACTIVATED_BASE_ERROR',
        payload: error
      })
    })
  }
}

export const fetchBitcoinBase = () => {
  return dispatch => {
    dispatch({type: 'START_FETCHING', payload: true})
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
    dispatch({type: 'START_FETCHING', payload: true})
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
    dispatch({type: 'START_FETCHING', payload: true})
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
    dispatch({type: 'START_FETCHING', payload: true})
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
    dispatch({type: 'START_FETCHING', payload: true})
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
    dispatch({type: 'START_FETCHING', payload: true})
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
