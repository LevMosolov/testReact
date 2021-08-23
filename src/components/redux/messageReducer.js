const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE = 'UPDATE-MESSAGE'


let inicialState = {
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
    newMessageText: ''
}

 export const messageReducer = (state = inicialState, action) => {    
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id:  state.messagesData.length + 1,
                message: action.mess
            }   
            return  {
                ...state,
                messagesData:[...state.messagesData, newMessage],
                newMessageText: ""
            }        
        case UPDATE_MESSAGE:
            return  {
                 ...state,
                 newMessageText:action.mess
                }
        default:
            return state;
    }
}

export const addMessageActionCreator = (text) => {
    return {
        type: ADD_MESSAGE,
        mess: text
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE,
        mess: text
    }
}

export default messageReducer