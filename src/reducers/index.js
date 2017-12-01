// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable';
import hello from './hello'
import Immutable from 'immutable'
var installDevTools = require("immutable-devtools");
installDevTools(Immutable)

export default combineReducers({
  hello
})
