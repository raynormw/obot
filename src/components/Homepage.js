import React from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
} from 'antd';
import Axios from 'axios';
import Notification from 'react-web-notification';

import {
  APIkey1,
  APIkey2,
} from '../utils/api.js';
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
import notifLogo from '../assets/Notifications_button_24.png';

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
      date: new Date(),
      notifikasi: false,
      title: '',
      options: {
        body: '',
        icon: '',
        sound: '',
      }
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

    this.timerNotif = setInterval(
      () => this._checkBase(),
      6000
    );

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
      this.checkDB,
      this.timerNotif
    );
  }

  _checkDB() {
    if(this.props.dbNotif || this.props.resetBase) {
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
    if(this.props.bitcoinDB.isActive) {
      if(this.props.bitcoinDB.status === 'buy') {
        if(this.props.bitcoinData.last < this.props.bitcoinDB.amount) {
          console.log('time to buy bitcoin');
          this._sendBuySMS(APIkey1, 'bitcoin', this.props.bitcoinDB.amount, this.props.bitcoinData.last);
        }
      } else if(this.props.bitcoinDB.status === 'sell') {
        if(this.props.bitcoinData.last > this.props.bitcoinDB.amount) {
          console.log('time to sell bitcoin');
          this._sendSellSMS(APIkey2, 'bitcoin', this.props.bitcoinDB.amount, this.props.bitcoinData.last);
        }
      }
    }
  }

  _sendBuySMS(apikey, coin, amount, last) {
    var self = this;

    Axios.get('https://platform.clickatell.com/messages/http/send?apiKey='+apikey+'&to=+6281298230631&content=Time+to+buy+'+coin+'+because+your+base+is+'+amount+'+and+the+last+price+is+'+last)
    .then((res) => {
      self.props.reset(coin);
      console.log(res.data);
      self.setState({
        notifikasi: true,
        title: 'Time to buy ' + coin,
        options: {
          body: `Base ${amount} and last price ${last}`,
          icon: notifLogo,
        }
      });
      if(res.data.error) {
        self._sendBuySMS(APIkey2, coin, amount, last);
      }
    })
    .catch((error) => {
      console.log('Send SMS error..', error);
    });
  }

  _sendSellSMS(apikey, coin, amount, last) {
    var self = this;

    Axios.get('https://platform.clickatell.com/messages/http/send?apiKey='+apikey+'&to=+6281298230631&content=Time+to+sell+'+coin+'+because+your+base+is+'+amount+'+and+the+last+price+is+'+last)
    .then((res) => {
      self.props.reset(coin);
      console.log(res.data);
      self.setState({
        notifikasi: true,
        title: 'Time to buy ' + coin,
        options: {
          body: `Base ${amount} and last price ${last}`,
          icon: notifLogo,
        }
      });
      if(res.data.error) {
        self._sendSellSMS(APIkey1, coin, amount, last);
      }
    })
    .catch((error) => {
      console.log('Send SMS error..', error);
    });
  }

  _tick() {
    this.setState({date: new Date()});
  }

  _handleNotificationOnClose() {
    this.setState({notifikasi: false});
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
              resetBase = {(coin) => this.props.reset(coin)}
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
        {
          this.state.notifikasi &&
          <Notification
            title={this.state.title}
            options={this.state.options}
            timeout={15000}
            onClose={this._handleNotificationOnClose.bind(this)}
          />
        }
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
    dbNotif: state.base.notif,
    resetBase: state.base.resetBase
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
    reset: (coin) => dispatch(resetBase(coin)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
