

import messageReducer from "./messageReducer"

 
 let store = {
     _callSubscriber(){},
    _state: {
        dialogs: {
            dialogsData:
            [
                { id: 1, name: 'Polina' },
                { id: 2, name: 'Jordan' },
                { id: 3, name: 'Tyson' },
                { id: 4, name: 'Koy' }            
            ],
            messagesData:
            [
                { id: 1, message: 'Hi, how are you' },
                { id: 2, message: 'Hi, not well, u?' },
                { id: 3, message: 'oh, Im borred you' },
                { id: 4, message: 'Me too' }
            ],
            newMessageText:'howhowhow'                
        }
    },

    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer      
   },  
    
    dispatch(action){        
        this._state.dialogs= messageReducer(this._state.dialogs, action)
        this._callSubscriber(this._state)  
    }
 }
 


export default store