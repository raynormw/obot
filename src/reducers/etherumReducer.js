const initialState = {
  data: [],
  status: '',
}

export default function etherumReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ETHERUM':
      return {...state, status: 'fetching'}
    case 'FETCH_ETHERUM_SUCCESS':
      return {...state, status: 'fetching success', data: action.payload}
    case 'FETCH_ETHERUM_ERROR':
      return {...state, status: 'error'}
    default:
      return state
  }
}
