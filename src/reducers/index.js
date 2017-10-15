import { combineReducers } from 'redux';

import bitcoinReducer from './bitcoinReducer';
import etherumReducer from './etherumReducer';
import litecoinReducer from './litecoinReducer';
import wavesReducer from './wavesReducer';
import baseReducer from './baseReducer';

export default combineReducers({
  bitcoin: bitcoinReducer,
  etherum: etherumReducer,
  litecoin: litecoinReducer,
  waves: wavesReducer,
  base: baseReducer
});
