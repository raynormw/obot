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
    ethHighPrice,
    ltcLastPrice,
    ltcLastSell,
    ltcLastBuy,
    ltcVolume,
    ltcLowPrice,
    ltcHighPrice,
    wavesLastPrice,
    wavesLastSell,
    wavesLastBuy,
    wavesVolume,
    wavesLowPrice,
    wavesHighPrice,
    xrpLastPrice,
    xrpLastSell,
    xrpLastBuy,
    xrpVolume,
    xrpLowPrice,
    xrpHighPrice,
    zonkLastPrice,
    zonkLastSell,
    zonkLastBuy,
    zonkVolume,
    zonkLowPrice,
    zonkHighPrice;

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

  if(props.litecoinStatus === 'fetching success') {
    ltcLastPrice = dotSeparator(props.litecoinData.last);
    ltcLastSell = dotSeparator(props.litecoinData.sell);
    ltcLastBuy = dotSeparator(props.litecoinData.buy);
    ltcVolume = dotSeparator(props.litecoinData.vol_idr);
    ltcLowPrice = dotSeparator(props.litecoinData.low);
    ltcHighPrice = dotSeparator(props.litecoinData.high);
  }

  if(props.wavesStatus === 'fetching success') {
    wavesLastPrice = dotSeparator(props.wavesData.last);
    wavesLastSell = dotSeparator(props.wavesData.sell);
    wavesLastBuy = dotSeparator(props.wavesData.buy);
    wavesVolume = dotSeparator(props.wavesData.vol_idr);
    wavesLowPrice = dotSeparator(props.wavesData.low);
    wavesHighPrice = dotSeparator(props.wavesData.high);
  }

  if(props.rippleStatus === 'fetching success') {
    xrpLastPrice = dotSeparator(props.rippleData.last);
    xrpLastSell = dotSeparator(props.rippleData.sell);
    xrpLastBuy = dotSeparator(props.rippleData.buy);
    xrpVolume = dotSeparator(props.rippleData.vol_idr);
    xrpLowPrice = dotSeparator(props.rippleData.low);
    xrpHighPrice = dotSeparator(props.rippleData.high);
  }

  if(props.zonkStatus === 'fetching success') {
    zonkLastPrice = dotSeparator(props.zonkData.last);
    zonkLastSell = dotSeparator(props.zonkData.sell);
    zonkLastBuy = dotSeparator(props.zonkData.buy);
    zonkVolume = dotSeparator(props.zonkData.vol_idr);
    zonkLowPrice = dotSeparator(props.zonkData.low);
    zonkHighPrice = dotSeparator(props.zonkData.high);
  }

  let coinData = [{
    key: '1',
    market: 'BTC/IDR',
    last_price: btcLastPrice || 'Fetching..',
    last_sell: btcLastSell || 'please wait..',
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
  }, {
    key: '3',
    market: 'LTC/IDR',
    last_price: ltcLastPrice || 'Fetching..',
    last_sell: ltcLastSell || 'please wait..',
    last_buy: ltcLastBuy,
    volume: ltcVolume,
    low_price: ltcLowPrice,
    high_price: ltcHighPrice
  }, {
    key: '4',
    market: 'WAVES/IDR',
    last_price: wavesLastPrice || 'Fetching..',
    last_sell: wavesLastSell || 'please wait..',
    last_buy: wavesLastBuy,
    volume: wavesVolume,
    low_price: wavesLowPrice,
    high_price: wavesHighPrice
  }, {
    key: '5',
    market: 'XRP/IDR',
    last_price: xrpLastPrice || 'Fetching..',
    last_sell: xrpLastSell || 'please wait..',
    last_buy: xrpLastBuy,
    volume: xrpVolume,
    low_price: xrpLowPrice,
    high_price: xrpHighPrice
  }, {
    key: '6',
    market: 'XZC/IDR',
    last_price: zonkLastPrice || 'Fetching..',
    last_sell: zonkLastSell || 'please wait..',
    last_buy: zonkLastBuy,
    volume: zonkVolume,
    low_price: zonkLowPrice,
    high_price: zonkHighPrice
  }];

  return (
    <Table dataSource={coinData} columns={columns} />
  );
}

function dotSeparator(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
