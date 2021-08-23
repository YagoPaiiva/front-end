import { POST_CREATE, POST_CREATE_SUCCESS, POST_CREATE_FALIED } from '../saga/Posts.actions'

const initialState = {
  alertMessage: null,
  message: null,
  isLoading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_CREATE:
      return {
        ...state,
        isLoading: true
      }
    case POST_CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: payload.verification.message,
        alertMessage: payload.verification.alertMessage
      }
    case POST_CREATE_FALIED:
      return {
        ...state,
        isLoading: false,
        message: 'error',
        alertMessage: 'error'
      }
    default:
      return state
  }
}
