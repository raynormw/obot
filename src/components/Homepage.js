import React from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
} from 'antd';

import { fetchBitcoin } from '../actions/bitcoinAction.js';
import { fetchEtherum } from '../actions/etherumAction.js';
import {TableCoin} from './TableCoin.js';
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
      10000
    );

    this.timerEtherum = setInterval(
      () => this.props.getEtherumData(),
      10000
    );
  }

  componentWillUnmount() {
    clearInterval(
      this.timerID,
      this.timerBitcoin,
      this.timerEtherum
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
              etherumData = {this.props.etherumData}
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
    etherumData: state.etherum.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBitcoinData: () => dispatch(fetchBitcoin()),
    getEtherumData: () => dispatch(fetchEtherum()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
