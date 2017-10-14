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

let btcLastPrice,
    btcLastSell,
    btcLastBuy,
    btcVolume,
    btcLowPrice,
    btcHighPrice,
    ethLastPrice,
    ethLastSell,
    ethLastBuy,
    ethVolume,
    ethLowPrice,
    ethHighPrice;

export const TableCoin = (props) => {
  if(props.bitcoinStatus === 'fetching success') {
    btcLastPrice = dotSeparator(props.bitcoinData.last);
    btcLastSell = dotSeparator(props.bitcoinData.sell);
    btcLastBuy = dotSeparator(props.bitcoinData.buy);
    btcVolume = dotSeparator(props.bitcoinData.vol_idr);
    btcLowPrice = dotSeparator(props.bitcoinData.low);
    btcHighPrice = dotSeparator(props.bitcoinData.high);
  }

  if(props.etherumStatus === 'fetching success') {
    ethLastPrice = dotSeparator(props.etherumData.last);
    ethLastSell = dotSeparator(props.etherumData.sell);
    ethLastBuy = dotSeparator(props.etherumData.buy);
    ethVolume = dotSeparator(props.etherumData.vol_idr);
    ethLowPrice = dotSeparator(props.etherumData.low);
    ethHighPrice = dotSeparator(props.etherumData.high);
  }

  let coinData = [{
    key: '1',
    market: 'BTC/IDR',
    last_price: btcLastPrice || 'Fetching..',
    last_sell: btcLastSell || 'please Wait..',
    last_buy: btcLastBuy,
    volume: btcVolume,
    low_price: btcLowPrice,
    high_price: btcHighPrice
  }, {
    key: '2',
    market: 'ETH/IDR',
    last_price: ethLastPrice || 'Fetching..',
    last_sell: ethLastSell || 'please wait..',
    last_buy: ethLastBuy,
    volume: ethVolume,
    low_price: ethLowPrice,
    high_price: ethHighPrice
  }];

  return (
    <Table dataSource={coinData} columns={columns} />
  );
}

function dotSeparator(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
