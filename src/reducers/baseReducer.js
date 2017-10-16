const initialState = {
  isBaseActive: false,
  coin: '',
  amount: 0,
  baseStatus: null,
  tes: {
    isActive: false
  },
  bitcoin: {
    amount: 0,
    isActive: false,
    status: '',
  },
  etherum: {
    amount: 0,
    isActive: false,
    status: '',
  },
  litecoin: {
    amount: 0,
    isActive: false,
    status: '',
  },
  ripple: {
    amount: 0,
    isActive: false,
    status: '',
  },
  waves: {
    amount: 0,
    isActive: false,
    status: '',
  },
  zonk: {
    amount: 0,
    isActive: false,
    status: '',
  }
};

export default function baseReducer(state = initialState, action) {
  switch (action.type) {
    case 'ACTIVATED_BASE':
      return {...state, isBaseActive: true, tes: action.payload}
    case 'DEACTIVATED_BASE':
      return {...state, coin: '', isBaseActive: false, amount: 0, baseStatus: null}
    case 'BUYING_BASE':
      return {...state, coin: action.coin, amount: action.amount, baseStatus: 'buy'}
    case 'SELLING_BASE':
      return {...state, coin: action.coin, amount: action.amount, baseStatus: 'sell'}
    case 'FETCH_BITCOIN_BASE':
      return {...state, bitcoin: action.payload}
    case 'FETCH_ETHERUM_BASE':
      return {...state, etherum: action.payload}
    case 'FETCH_LITECOIN_BASE':
      return {...state, litecoin: action.payload}
    case 'FETCH_RIPPLE_BASE':
      return {...state, ripple: action.payload}
    case 'FETCH_WAVES_BASE':
      return {...state, waves: action.payload}
    case 'FETCH_ZONK_BASE':
      return {...state, zonk: action.payload}
    default:
      return state
  }
}
