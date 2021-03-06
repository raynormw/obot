const initialState = {
  data: [],
  status: '',
}

export default function bitcoinReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_BITCOIN':
      return {...state, status: 'fetching'}
    case 'FETCH_BITCOIN_SUCCESS':
      return {...state, status: 'fetching success', data: action.payload}
    case 'FETCH_BITCOIN_ERROR':
      return {...state, status: 'error'}
    default:
      return state
  }
}
