import React from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
} from 'antd';

import { tick } from '../actions/timeAction.js'
import TableCoin from './TableCoin.js';
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

  componentDidMount() {
    this.timerID = setInterval(
      () => this.props.getDate(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
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
          <Col span={14}>
            <TableCoin />
          </Col>
        </Row>
        <div style={styles.timeContainer}>
          {this.props.date.toLocaleTimeString()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    date: state.getDate.date,
    //fetching: state.passwordList.fetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDate: () => dispatch(tick()),
    //deletePassword: (id) => dispatch(deletePassword(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
