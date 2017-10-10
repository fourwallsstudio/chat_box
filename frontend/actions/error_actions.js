export const RECEIVE_ERROR = 'ERROR::RECEIVE_ERROR';

export const receiveError = (err) => {
  return {
    type: RECEIVE_ERROR,
    err
  }
}
