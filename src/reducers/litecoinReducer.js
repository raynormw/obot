const initialState = {
  data: [],
  status: '',
}

export default function litecoinReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_LITECOIN':
      return {...state, status: 'fetching'}
    case 'FETCH_LITECOIN_SUCCESS':
      return {...state, status: 'fetching success', data: action.payload}
    case 'FETCH_LITECOIN_ERROR':
      return {...state, status: 'error'}
    default:
      return state
  }
}
