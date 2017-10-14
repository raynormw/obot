import React from 'react';
import {
  Row,
  Col,
} from 'antd';

import logo from '../logo.svg';
import './Homepage.css';
import TableCoin from './TableCoin.js';

const styles = {
  rowContainer: {
    padding: '2.5em',
    fontSize: '1.5em'
  }
}

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="Homepage">
        <header className="Homepage-header">
          <img src={logo} className="Homepage-logo" alt="logo" />
          <h1 className="Homepage-title">Welcome to Obot</h1>
        </header>
        <p className="Homepage-intro">
          Buy low, sell high!! always setting the base..
        </p>
        <Row gutter={40} style={styles.rowContainer}>
          <Col span={12}>
            tes {this.state.date.toLocaleTimeString()}
          </Col>
          <Col span={12}>
            <TableCoin />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Homepage;
