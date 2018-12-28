import { combineReducers } from 'redux'
//引入每个页面的reducer
import user from './user'
var rootReducer = combineReducers({
  user
})

export default rootReducer
