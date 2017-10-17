import React from 'react';
import {
  Row,
  Col,
  Button
} from 'antd';

const styles = {
  container: {
    textAlign: 'left',
    marginTop: '2.5em',
    padding: 0,
    fontSize: '0.75em'
  },
  baseInfo: {
    marginBottom: '2em'
  },
  ul: {
    listStyleType: 'circle',
    marginLeft: '2em',
    marginBottom: '1em'
  }
}

export const BaseStatus = (props) => {
  let bitcoinStatus = (props.bitcoinDB.isActive) ? 'active' : 'not active',
      etherumStatus = (props.etherumDB.isActive) ? 'active' : 'not active',
      litecoinStatus = (props.litecoinDB.isActive) ? 'active' : 'not active',
      rippleStatus = (props.rippleDB.isActive) ? 'active' : 'not active',
      wavesStatus = (props.wavesDB.isActive) ? 'active' : 'not active',
      zonkStatus = (props.zonkDB.isActive) ? 'active' : 'not active';

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
            <Button type="danger" onClick={() => props.resetBase('bitcoin')}>Reset</Button>
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
            <Button type="danger" onClick={() => props.resetBase('etherum')}>Reset</Button>
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
            <Button type="danger" onClick={() => props.resetBase('litecoin')}>Reset</Button>
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
            <Button type="danger" onClick={() => props.resetBase('waves')}>Reset</Button>
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
            <Button type="danger" onClick={() => props.resetBase('ripple')}>Reset</Button>
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
            <Button type="danger" onClick={() => props.resetBase('zonk')}>Reset</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
