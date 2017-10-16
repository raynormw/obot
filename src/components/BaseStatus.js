import React from 'react';
import {
  Row,
  Col
} from 'antd';

const styles = {
  container: {
    textAlign: 'left',
    marginTop: '2.5em',
    padding: 0,
    fontSize: '0.75em'
  },
  baseInfo: {
    marginBottom: '1em'
  },
  ul: {
    listStyleType: 'circle',
    marginLeft: '2em'
  }
}

export const BaseStatus = (props) => {
  let bitcoinStatus,
      etherumStatus,
      litecoinStatus,
      rippleStatus,
      wavesStatus,
      zonkStatus;

  if(props.bitcoinDB.isActive) {
    bitcoinStatus = 'active'
  } else {
    bitcoinStatus = 'not active'
  }

  if(props.etherumDB.isActive) {
    etherumStatus = 'active'
  } else {
    etherumStatus = 'not active'
  }

  if(props.litecoinDB.isActive) {
    litecoinStatus = 'active'
  } else {
    litecoinStatus = 'not active'
  }

  if(props.rippleDB.isActive) {
    rippleStatus = 'active'
  } else {
    rippleStatus = 'not active'
  }

  if(props.wavesDB.isActive) {
    wavesStatus = 'active'
  } else {
    wavesStatus = 'not active'
  }

  if(props.zonkDB.isActive) {
    zonkStatus = 'active'
  } else {
    zonkStatus = 'not active'
  }

  if(props.fetching) {
    return (
      <div style={styles.container}>
        Fetching.. please wait..
      </div>
    );
  } else {
    return (
      <div style={styles.container}>
        <Row style={styles.baseInfo}>
          <Col span={12}>
            <p>
              Bitcoin:
            </p>
            <ul style={styles.ul}>
              <li>Status: {bitcoinStatus}</li>
              <li>Amount: {props.bitcoinDB.amount}</li>
              <li>Buy/Sell: {props.bitcoinDB.status}</li>
            </ul>
          </Col>
          <Col span={12}>
            <p>
              Etherum:
            </p>
            <ul style={styles.ul}>
              <li>Status: {etherumStatus}</li>
              <li>Amount: {props.etherumDB.amount}</li>
              <li>Buy/Sell: {props.etherumDB.status}</li>
            </ul>
          </Col>
        </Row>
        <Row style={styles.baseInfo}>
          <Col span={12}>
            <p>
              Litecoin:
            </p>
            <ul style={styles.ul}>
              <li>Status: {litecoinStatus}</li>
              <li>Amount: {props.litecoinDB.amount}</li>
              <li>Buy/Sell: {props.litecoinDB.status}</li>
            </ul>
          </Col>
          <Col span={12}>
            <p>
              Waves:
            </p>
            <ul style={styles.ul}>
              <li>Status: {wavesStatus}</li>
              <li>Amount: {props.wavesDB.amount}</li>
              <li>Buy/Sell: {props.wavesDB.status}</li>
            </ul>
          </Col>
        </Row>
        <Row style={styles.baseInfo}>
          <Col span={12}>
            <p>
              Ripple:
            </p>
            <ul style={styles.ul}>
              <li>Status: {rippleStatus}</li>
              <li>Amount: {props.rippleDB.amount}</li>
              <li>Buy/Sell: {props.rippleDB.status}</li>
            </ul>
          </Col>
          <Col span={12}>
            <p>
              Zonk Coin:
            </p>
            <ul style={styles.ul}>
              <li>Status: {zonkStatus}</li>
              <li>Amount: {props.zonkDB.amount}</li>
              <li>Buy/Sell: {props.zonkDB.status}</li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}
