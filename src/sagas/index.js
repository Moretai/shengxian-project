import { fork } from 'redux-saga/effects'
import hello from './hello'
import logger from './logger'

let sagas = [
  fork(hello),
  fork(logger)
]

export default function* rootSaga() {
  yield sagas
}
