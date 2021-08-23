import { DELETE_USER, DELETE_USER_FALIED, DELETE_USER_SUCCESS } from '../saga/Posts.actions'

const initialState = {
  alertMessage: null,
  message: null,
  isLoading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_USER:
      return {
        ...state,
        isLoading: true
      }
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: payload.verification.message,
        alertMessage: payload.verification.alertMessage
      }
    case DELETE_USER_FALIED:
      return {
        ...state,
        isLoading: false,
        message: payload.verification.message,
        alertMessage: payload.verification.alertMessage
      }
    default:
      return state
  }
}
