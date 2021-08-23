import { takeEvery, all, call, put, takeLeading } from 'redux-saga/effects'
import {
  deleteUser,
  getAllUsers,
  postAuthLogin,
  postCreateUser,
  putUser
} from '../utils/api'
import {
  GET_USERS,
  POST_AUTH,
  POST_CREATE,
  DELETE_USER,
  getUsersSuccess,
  postAuthSuccess,
  postAuthFalied,
  getUserFalied,
  postCreateSuccess,
  postCreateFalied,
  PUT_USER,
  putUserFalied,
  putUserSuccess,
  deleteUserSuccess,
  deleteUserFalied
} from './Posts.actions'

function * getPostsSaga () {
  try {
    const data = yield call(getAllUsers)
    yield put(getUsersSuccess(data))
  } catch (error) {
    yield put(getUserFalied(error.message))
  }
}

function * postAuth (action) {
  let verification = []
  try {
    const data = yield call(postAuthLogin, action.payload)
    delete action.payload.password
    data.message
      ? verification = { message: data.message, alertMessage: 'error' }
      : verification = { message: 'Logado com Sucesso', alertMessage: 'success' }

    yield put(postAuthSuccess({ ...action.payload, ...data, verification }))
  } catch (error) {
    yield put(postAuthFalied(error.message))
  }
}

function * postCreate (action) {
  let verification = []
  try {
    const data = yield call(postCreateUser, action.payload)

    if (data.driver) {
      data.keyValue.username
        ? verification = { message: 'username cadastrado', alertMessage: 'error' }
        : verification = { message: 'Email cadastrado', alertMessage: 'error' }
    } else if (data.errors) {
      verification = { message: data.errors, alertMessage: 'info' }
    } else {
      verification = { message: data.message, alertMessage: 'success' }
    }
    yield put(postCreateSuccess({ ...action.payload, verification }))
  } catch (error) {
    yield put(postCreateFalied(error.message))
  }
}

function * putUserEdit (action) {
  try {
    const data = yield call(putUser, action.payload)
    yield put(putUserSuccess(data))
  } catch (error) {
    yield put(putUserFalied(error.message))
  }
}

function * deleteDeleteUser (action) {
  let verification = []
  try {
    const data = yield call(deleteUser, action.payload)
    if (data.message) {
      verification = { message: data.message, alertMessage: 'success' }
    } else {
      verification = { message: 'error', alertMessage: 'error' }
    }
    yield put(deleteUserSuccess({ data, verification }))
    yield put()
  } catch (error) {
    yield put(deleteUserFalied(error.message))
  }
}

function * getPostsWatcher () {
  yield takeEvery(GET_USERS, getPostsSaga)
  yield takeLeading(POST_AUTH, postAuth)
  yield takeLeading(POST_CREATE, postCreate)
  yield takeLeading(PUT_USER, putUserEdit)
  yield takeLeading(DELETE_USER, deleteDeleteUser)
}

export default function * postsSaga () {
  yield all([getPostsWatcher()])
}
