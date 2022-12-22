import thunk from 'redux-thunk'
import todosReducer from './Services/Reducers/todosReducer'
const { createStore, combineReducers, applyMiddleware } = require('redux')
const { default: counterReducer } = require('./Services/Reducers/counterReducer')

const rootReducers = combineReducers({counterReducer, todosReducer})

const store = createStore(rootReducers, applyMiddleware(thunk))
export default store
