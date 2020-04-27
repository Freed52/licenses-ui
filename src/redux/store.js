import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkMiddleware from 'redux-thunk'
import plansReducer from './plans-reducer'

let reducers = combineReducers({
    plans: plansReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store