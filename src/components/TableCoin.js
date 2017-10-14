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
  title: 'Last Sell',
  dataIndex: 'last_sell',
  key: 'last_sell',
}, {
  title: 'Last Buy',
  dataIndex: 'last_buy',
  key: 'last_buy',
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

export const TableCoin = (props) => {
  let coinData = [{
    key: '1',
    market: 'BTC/IDR',
    last_price: props.bitcoinData.last || 'Fetching..',
    last_sell: props.bitcoinData.last,
    last_buy: props.bitcoinData.buy,
    volume: props.bitcoinData.vol_idr,
    low_price: props.bitcoinData.low,
    high_price: props.bitcoinData.high
  }, {
    key: '2',
    market: 'ETH/IDR',
    last_price: props.etherumData.last || 'Fetching..',
    last_sell: props.bitcoinData.last,
    last_buy: props.bitcoinData.buy,
    volume: props.etherumData.vol_idr,
    low_price: props.etherumData.low,
    high_price: props.etherumData.high
  }];

  return (
    <Table dataSource={coinData} columns={columns} />
  );
}
