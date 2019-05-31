/* condidate training constants and list*/
import { combineReducers } from 'redux'
import postReducer from './postReducer'

export default combineReducers({
  storeData: postReducer
})
