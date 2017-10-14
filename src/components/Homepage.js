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
import { TableCoin } from './TableCoin.js';
import logo from '../logo.svg';
import './Homepage.css';

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
    height: '50px',
    bottom: '0px',
    left: '0px',
    right: '0px',
    marginBottom: '0px'
  }
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
  }

  componentWillUnmount() {
    clearInterval(
      this.timerID,
      this.timerBitcoin,
      this.timerEtherum,
      this.timerLitecoin,
      this.timerWaves,
    );
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
            tes
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBitcoinData: () => dispatch(fetchBitcoin()),
    getEtherumData: () => dispatch(fetchEtherum()),
    getLitecoinData: () => dispatch(fetchLitecoin()),
    getWavesData: () => dispatch(fetchWaves()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
