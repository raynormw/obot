const initialState = {
  date: new Date()
}

export default function timeReducer(state = initialState, action) {
  switch (action.type) {
    case 'STARTING_CLOCK':
      return {...state, date: action.payload}
    default:
      return state
  }
}
