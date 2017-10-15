import { combineReducers } from 'redux';

import bitcoinReducer from './bitcoinReducer';
import etherumReducer from './etherumReducer';
import litecoinReducer from './litecoinReducer';
import wavesReducer from './wavesReducer';
import rippleReducer from './rippleReducer';
import zonkReducer from './zonkReducer';
import baseReducer from './baseReducer';

export default combineReducers({
  bitcoin: bitcoinReducer,
  etherum: etherumReducer,
  litecoin: litecoinReducer,
  waves: wavesReducer,
  ripple: rippleReducer,
  zonk: zonkReducer,
  base: baseReducer
});
