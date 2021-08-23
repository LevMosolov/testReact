import { combineReducers, createStore } from "redux";
import {messageReducer} from './messageReducer'




let reducers = combineReducers({
    dialogs:messageReducer
})

let store = createStore(reducers)

export default store