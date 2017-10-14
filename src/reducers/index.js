import { combineReducers } from 'redux';

import bitcoinReducer from './bitcoinReducer';
import etherumReducer from './etherumReducer';

export default combineReducers({
  bitcoin: bitcoinReducer,
  etherum: etherumReducer,
});
