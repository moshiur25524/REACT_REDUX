
const { createStore } = require('redux')
const { default: counterReducer } = require('./Services/Reducers/counterReducer')

const store = createStore(counterReducer)
export default store
