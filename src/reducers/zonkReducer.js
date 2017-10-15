const initialState = {
  data: [],
  status: '',
}

export default function zonkReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_ZONK':
      return {...state, status: 'fetching'}
    case 'FETCH_ZONK_SUCCESS':
      return {...state, status: 'fetching success', data: action.payload}
    case 'FETCH_ZONK_ERROR':
      return {...state, status: 'error'}
    default:
      return state
  }
}
