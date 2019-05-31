/* condidate training constants and list*/
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const initialState = {}
const middleware  = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
  ),
)

export default store;
