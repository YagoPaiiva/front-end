export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USER_FALIED = 'GET_USER_FALIED'
export const POST_AUTH = 'POST_AUTH'
export const POST_AUTH_SUCCESS = 'POST_AUTH_SUCCESS'
export const POST_AUTH_FALIED = 'POST_AUTH_FALIED'
export const POST_CREATE = 'POST_CREATE'
export const POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS'
export const POST_CREATE_FALIED = 'POST_CREATE_FALIED'
export const PUT_USER = 'PUT_USER'
export const PUT_USER_SUCCESS = 'PUT_USER_SUCCESS'
export const PUT_USER_FALIED = 'PUT_USER_FALIED'
export const DELETE_USER = 'DELETE_USER'
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'
export const DELETE_USER_FALIED = 'DELETE_USER_FALIED'

export const getUsers = payload => ({
  type: GET_USERS,
  payload
})

export const getUsersSuccess = payload => ({
  type: GET_USERS_SUCCESS,
  payload
})

export const getUserFalied = payload => ({
  type: GET_USER_FALIED,
  payload
})

export const postAuth = payload => ({
  type: POST_AUTH,
  payload
})

export const postAuthSuccess = payload => ({
  type: POST_AUTH_SUCCESS,
  payload
})

export const postAuthFalied = payload => ({
  type: POST_AUTH_FALIED,
  payload
})

export const postCreate = payload => ({
  type: POST_CREATE,
  payload
})
export const postCreateSuccess = payload => ({
  type: POST_CREATE_SUCCESS,
  payload
})
export const postCreateFalied = payload => ({
  type: POST_CREATE_FALIED,
  payload
})

export const putUser = payload => ({
  type: PUT_USER,
  payload
})
export const putUserSuccess = payload => ({
  type: PUT_USER_SUCCESS,
  payload
})
export const putUserFalied = payload => ({
  type: PUT_USER_FALIED,
  payload
})

export const deleteUser = payload => ({
  type: DELETE_USER,
  payload
})
export const deleteUserSuccess = payload => ({
  type: DELETE_USER_SUCCESS,
  payload
})
export const deleteUserFalied = payload => ({
  type: DELETE_USER_FALIED,
  payload
})
