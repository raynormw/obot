const initialState = {
  data: [],
  status: '',
}

export default function rippleReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_RIPPLE':
      return {...state, status: 'fetching'}
    case 'FETCH_RIPPLE_SUCCESS':
      return {...state, status: 'fetching success', data: action.payload}
    case 'FETCH_RIPPLE_ERROR':
      return {...state, status: 'error'}
    default:
      return state
  }
}
