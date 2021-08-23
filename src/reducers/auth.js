import { POST_AUTH, POST_AUTH_SUCCESS, POST_AUTH_FALIED } from '../saga/Posts.actions'

const initialState = {
  alertMessage: null,
  message: null,
  isLoading: false,
  posts: [],
  user: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_AUTH:
      return {
        ...state,
        isLoading: true
      }

    case POST_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: payload.verification.message,
        posts: payload,
        user: payload.username,
        alertMessage: payload.verification.alertMessage
      }

    case POST_AUTH_FALIED:
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
