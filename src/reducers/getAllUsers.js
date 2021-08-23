import { GET_USERS, GET_USERS_SUCCESS, GET_USER_FALIED } from '../saga/Posts.actions'
const InitialState = {
  posts: [],
  error: null
}

export default (state = InitialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return {
        ...state
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        posts: payload
      }
    case GET_USER_FALIED:
      return {
        ...state,
        post: payload
      }
    default:
      return state
  }
}
