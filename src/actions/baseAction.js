export const buyingBase = (coin, amount) => {
  return dispatch => {
    dispatch({type: 'ACTIVATED_BASE'})
    dispatch({
      type: 'BUYING_BASE',
      coin: coin,
      amount: amount
    })
  }
}

export const sellingBase = (coin, amount) => {
  return dispatch => {
    dispatch({
      type: 'SELLING_BASE',
      coin: coin,
      amount: amount
    })
  }
}

export const resetBase = () => {
  return dispatch => {
    dispatch({type: 'DEACTIVATED_BASE'})
  }
}
