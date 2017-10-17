import React from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
} from 'antd';

import { fetchBitcoin } from '../actions/bitcoinAction.js';
import { fetchEtherum } from '../actions/etherumAction.js';
import { fetchLitecoin } from '../actions/litecoinAction.js';
import { fetchWaves } from '../actions/wavesAction.js';
import { fetchRipple } from '../actions/rippleAction.js';
import { fetchZonk } from '../actions/zonkAction.js';
import {
  fetchBitcoinBase,
  fetchEtherumBase,
  fetchLitecoinBase,
  fetchWavesBase,
  fetchRippleBase,
  fetchZonkBase,
  resetBase
} from '../actions/baseAction.js';
import { TableCoin } from './TableCoin.js';
import WrappedFormBase from './FormBase.js';
import { BaseStatus } from './BaseStatus.js';
import logo from '../logo.svg';
import './Homepage.css';

const request = require('request');

const styles = {
  rowContainer: {
    padding: '2.5em',
    fontSize: '1.5em',
    margin: 0
  },
  timeContainer: {
    textAlign: 'right',
    paddingRight: '3em',
    position: 'fixed',
    height: '20px',
    bottom: '0px',
    left: '0px',
    right: '0px',
    marginBottom: '5px',
  },
  h3: {
    textAlign: 'left',
    paddingLeft: '1em',
    marginBottom: '1em'
  },
};

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    }

  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this._tick(),
      1000
    );

    this.timerBitcoin = setInterval(
      () => this.props.getBitcoinData(),
      5000
    );

    this.timerEtherum = setInterval(
      () => this.props.getEtherumData(),
      5000
    );

    this.timerLitecoin = setInterval(
      () => this.props.getLitecoinData(),
      5000
    );

    this.timerWaves = setInterval(
      () => this.props.getWavesData(),
      5000
    );

    this.timerRipple = setInterval(
      () => this.props.getRippleData(),
      5000
    );

    this.timerZonk = setInterval(
      () => this.props.getZonkData(),
      5000
    );

    this.checkDB = setInterval(
      () => this._checkDB(),
      1000
    );

    // this.timerNotif = setInterval(
    //   () => this._checkBase(),
    //   6000
    // );

    this._fetchDb();

  }

  componentWillUnmount() {
    clearInterval(
      this.timerID,
      this.timerBitcoin,
      this.timerEtherum,
      this.timerLitecoin,
      this.timerWaves,
      this.timerRipple,
      this.timerZonk,
      this.checkDB
      //this.timerNotif
    );
  }

  _checkDB() {
    if(this.props.dbNotif) {
      console.log('interval');
      this._fetchDb();
    }
  }

  _fetchDb() {
    this.props.getBitcoinDB();
    this.props.getEtherumDB();
    this.props.getLitecoinDB();
    this.props.getRippleDB();
    this.props.getWavesDB();
    this.props.getZonkDB();
  }

  _checkBase() {
    if(this.props.isBaseActive === true) {
      if(this.props.coin === 'bitcoin') {
        if(this.props.status === 'buy') {
          if(this.props.bitcoinData.last < this.props.amount) {
            console.log('time to buy');
            this._sendBuySMS(this.props.coin, this.props.amount, this.props.bitcoinData.last);
          }
        } else if(this.props.status === 'sell') {
          if(this.props.bitcoinData.last > this.props.amount) {
            console.log('time to sell');
            this._sendSellSMS(this.props.coin, this.props.amount, this.props.bitcoinData.last);
          }
        }
      } else if(this.props.coin === 'eth') {
        if(this.props.status === 'buy') {
          if(this.props.etherumData.last < this.props.amount) {
            console.log('time to buy');
            this._sendBuySMS(this.props.coin, this.props.amount, this.props.etherumData.last);
          }
        } else if(this.props.status === 'sell') {
          if(this.props.etherumData.last > this.props.amount) {
            console.log('time to sell');
            this._sendSellSMS(this.props.coin, this.props.amount, this.props.etherumData.last);
          }
        }
      } else if(this.props.coin === 'ltc') {
        if(this.props.status === 'buy') {
          if(this.props.litecoinData.last < this.props.amount) {
            console.log('time to buy');
            this._sendBuySMS(this.props.coin, this.props.amount, this.props.litecoinData.last);
          }
        } else if(this.props.status === 'sell') {
          if(this.props.litecoinData.last > this.props.amount) {
            console.log('time to sell');
            this._sendSellSMS(this.props.coin, this.props.amount, this.props.litecoinData.last);
          }
        }
      } else if(this.props.coin === 'waves') {
        if(this.props.status === 'buy') {
          if(this.props.wavesData.last < this.props.amount) {
            console.log('time to buy');
            this._sendBuySMS(this.props.coin, this.props.amount, this.props.wavesData.last);
          }
        } else if(this.props.status === 'sell') {
          if(this.props.wavesData.last > this.props.amount) {
            console.log('time to sell');
            this._sendSellSMS(this.props.coin, this.props.amount, this.props.wavesData.last);
          }
        }
      } else if(this.props.coin === 'xrp') {
        if(this.props.status === 'buy') {
          if(this.props.rippleData.last < this.props.amount) {
            console.log('time to buy');
            this._sendBuySMS(this.props.coin, this.props.amount, this.props.rippleData.last);
          }
        } else if(this.props.status === 'sell') {
          if(this.props.rippleData.last > this.props.amount) {
            console.log('time to sell');
            this._sendSellSMS(this.props.coin, this.props.amount, this.props.rippleData.last);
          }
        }
      } else if(this.props.coin === 'xzc') {
        if(this.props.status === 'buy') {
          if(this.props.zonkData.last < this.props.amount) {
            console.log('time to buy');
            this._sendBuySMS(this.props.coin, this.props.amount, this.props.zonkData.last);
          }
        } else if(this.props.status === 'sell') {
          if(this.props.zonkData.last > this.props.amount) {
            console.log('time to sell');
            this._sendSellSMS(this.props.coin, this.props.amount, this.props.zonkData.last);
          }
        }
      }
    }
  }

  _sendBuySMS(coin, amount, last) {
    var self = this;
    request('https://platform.clickatell.com/messages/http/send?apiKey=aKvG7PS9RsWtW37jec-SFw==&to=+6281298230631&content=Time+to+buy+'+coin+'+because+your+base+is+'+amount+'+and+the+last+price+is+'+last, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
      if(response && response.statusCode === 202) {
        self.props.reset();
      }
    });
  }

  _sendSellSMS(coin, amount, last) {
    var self = this;
    request('https://platform.clickatell.com/messages/http/send?apiKey=aKvG7PS9RsWtW37jec-SFw==&to=+6281298230631&content=Time+to+sell+'+coin+'+because+your+base+is+'+amount+'+and+the+last+price+is+'+last, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
      if(response && response.statusCode === 202) {
        self.props.reset();
      }
    });
  }

  _tick() {
    this.setState({date: new Date()})
  }

  render() {
    return (
      <div className="Homepage">
        <header className="Homepage-header">
          <img src={logo} className="Homepage-logo" alt="logo" />
          <h1 className="Homepage-title">Welcome to Obot</h1>
        </header>
        <p className="Homepage-intro">
          Buy low, sell high!! always setting the base..
        </p>
        <Row type="flex" justify="space-between" style={styles.rowContainer}>
          <Col span={8}>
            <h3 style={styles.h3}>Base Setting:</h3>
            <WrappedFormBase />
            <BaseStatus
              bitcoinDB = {this.props.bitcoinDB}
              etherumDB = {this.props.etherumDB}
              litecoinDB = {this.props.litecoinDB}
              rippleDB = {this.props.rippleDB}
              wavesDB = {this.props.wavesDB}
              zonkDB = {this.props.zonkDB}
              fetching = {this.props.dbStatus}
            />
          </Col>
          <Col span={15}>
            <TableCoin
              bitcoinData = {this.props.bitcoinData}
              bitcoinStatus = {this.props.bitcoinStatus}
              etherumData = {this.props.etherumData}
              etherumStatus = {this.props.etherumStatus}
              litecoinData = {this.props.litecoinData}
              litecoinStatus = {this.props.litecoinStatus}
              wavesData = {this.props.wavesData}
              wavesStatus = {this.props.wavesStatus}
              rippleData = {this.props.rippleData}
              rippleStatus = {this.props.rippleStatus}
              zonkData = {this.props.zonkData}
              zonkStatus = {this.props.zonkStatus}
            />
          </Col>
        </Row>
        <div style={styles.timeContainer}>
          {this.state.date.toLocaleTimeString()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bitcoinData: state.bitcoin.data,
    bitcoinStatus: state.bitcoin.status,
    etherumData: state.etherum.data,
    etherumStatus: state.etherum.status,
    litecoinData: state.litecoin.data,
    litecoinStatus: state.litecoin.status,
    wavesData: state.waves.data,
    wavesStatus: state.waves.status,
    rippleData: state.ripple.data,
    rippleStatus: state.ripple.status,
    zonkData: state.zonk.data,
    zonkStatus: state.zonk.status,

    bitcoinDB: state.base.bitcoin,
    etherumDB: state.base.etherum,
    litecoinDB: state.base.litecoin,
    rippleDB: state.base.ripple,
    wavesDB: state.base.waves,
    zonkDB: state.base.zonk,
    dbStatus: state.base.fetching,
    dbNotif: state.base.notif
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBitcoinData: () => dispatch(fetchBitcoin()),
    getEtherumData: () => dispatch(fetchEtherum()),
    getLitecoinData: () => dispatch(fetchLitecoin()),
    getWavesData: () => dispatch(fetchWaves()),
    getRippleData: () => dispatch(fetchRipple()),
    getZonkData: () => dispatch(fetchZonk()),

    getBitcoinDB: () => dispatch(fetchBitcoinBase()),
    getEtherumDB: () => dispatch(fetchEtherumBase()),
    getLitecoinDB: () => dispatch(fetchLitecoinBase()),
    getWavesDB: () => dispatch(fetchWavesBase()),
    getRippleDB: () => dispatch(fetchRippleBase()),
    getZonkDB: () => dispatch(fetchZonkBase()),
    reset: () => dispatch(resetBase()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
