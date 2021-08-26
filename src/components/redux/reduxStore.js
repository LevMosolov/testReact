import { combineReducers, createStore } from "redux";
import {messageReducer} from './messageReducer'
import {friendsReducer} from './friendsReducer'




let reducers = combineReducers({
    friends:friendsReducer,
    dialogs:messageReducer
    
})

let store = createStore(reducers)

export default store