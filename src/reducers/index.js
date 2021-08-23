import { combineReducers } from 'redux'
import AllUser from './getAllUsers'
import authSingIn from './auth'
import CreateUser from './createUser'
import putUser from './putUser'
import deleteUser from './deleteUser'

export default combineReducers({
  CreateUser,
  AllUser,
  authSingIn,
  putUser,
  deleteUser
})
