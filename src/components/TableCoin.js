import React from 'react';
import { Table } from 'antd';

const columns = [{
  title: 'Market',
  dataIndex: 'market',
  key: 'market',
}, {
  title: 'Last Price',
  dataIndex: 'last_price',
  key: 'last_price',
}, {
  title: 'Volume',
  dataIndex: 'volume',
  key: 'volume',
}, {
  title: 'Low Price',
  dataIndex: 'low_price',
  key: 'low_price',
}, {
  title: 'High Price',
  dataIndex: 'high_price',
  key: 'high_price',
}];

export default class TableCoin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coinData : [{
        key: '1',
        market: 'BTC/IDR',
        last_price: '74.250.600',
        volume: '43,2bn IDR',
        low_price: '72.227.500',
        high_price: '74.499.000'
      }, {
        key: '2',
        market: 'ETH/IDR',
        last_price: '4.434.000',
        volume: '4,2bn IDR',
        low_price: '4.323.500',
        high_price: '4.548.000'
      }]
    }
  }
  render() {
    return (
      <Table dataSource={this.state.coinData} columns={columns} />
    );
  }
}
