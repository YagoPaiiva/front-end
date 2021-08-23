
import { all } from 'redux-saga/effects'
import postsSaga from './Posts.saga'

export default function * () {
  yield all([postsSaga()])
}
