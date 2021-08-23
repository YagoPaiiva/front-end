import { PUT_USER, PUT_USER_FALIED, PUT_USER_SUCCESS } from '../saga/Posts.actions'

const initialState = {
  alertMessage: null,
  message: null,
  isLoading: false
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PUT_USER:
      return {
        ...state,
        isLoading: true
      }
    case PUT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: payload.message,
        alertMessage: 'success'
      }
    case PUT_USER_FALIED:
      return {
        ...state,
        message: 'error',
        alertMessage: 'error'
      }
    default:
      return state
  }
}
