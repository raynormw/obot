const initialState = {
  isBaseActive: false,
  coin: '',
  amount: 0,
  baseStatus: null,
};

export default function baseReducer(state = initialState, action) {
  switch (action.type) {
    case 'ACTIVATED_BASE':
      return {...state, isBaseActive: true}
    case 'DEACTIVATED_BASE':
      return {...state, coin: '', isBaseActive: false, amount: 0, baseStatus: null}
    case 'BUYING_BASE':
      return {...state, coin: action.coin, amount: action.amount, baseStatus: 'buy'}
    case 'SELLING_BASE':
      return {...state, coin: action.coin, amount: action.amount, baseStatus: 'sell'}
    default:
      return state
  }
}
