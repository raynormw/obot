export const tick = () => {
  return dispatch => {
    dispatch({
    type: 'STARTING_CLOCK',
    payload: new Date()
  })}
}
