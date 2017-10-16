const initialState = {
  notif: false,
  fetching: false,
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
    case 'START_FETCHING':
      return {...state, fetching: action.payload}
    case 'BUYING_BASE_SUCCESS':
      return {...state, fetching: false, notif: 'success'}
    case 'BUYING_BASE_ERROR':
      return {...state, fetching: false, notif: 'failed'}
    case 'SELLING_BASE_SUCCESS':
      return {...state, notif: 'Base for sell success!'}
    case 'FETCH_BITCOIN_BASE':
      return {...state, bitcoin: action.payload, fetching: false, notif: false}
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
