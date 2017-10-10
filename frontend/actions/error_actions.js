export const RECEIVE_ERRORS = 'ERROR::RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'ERROR::CLEAR_ERRORS';

export const receiveErrors = (errors) => {
  if (typeof errors === 'string') errors = [errors];
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}
