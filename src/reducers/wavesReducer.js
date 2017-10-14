const initialState = {
  data: [],
  status: '',
}

export default function wavesReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_WAVES':
      return {...state, status: 'fetching'}
    case 'FETCH_WAVES_SUCCESS':
      return {...state, status: 'fetching success', data: action.payload}
    case 'FETCH_WAVES_ERROR':
      return {...state, status: 'error'}
    default:
      return state
  }
}
