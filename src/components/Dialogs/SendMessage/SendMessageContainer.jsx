import React from 'react'
import {addMessageActionCreator} from '../../redux/messageReducer'
import {updateNewMessageTextActionCreator} from '../../redux/messageReducer'
import SendMessage from './SendMessage';
import { connect } from 'react-redux';




let mapStateToProps = (state)=>{
    
    return {                   
        newMessageText:state.dialogs.newMessageText        
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        addMessageActionCreator: (text)=>{            
            dispatch(addMessageActionCreator(text))
        },
        updateNewMessageTextActionCreator : (text)=>{                     
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

const SendMessageContainer = connect(mapStateToProps, mapDispatchToProps)(SendMessage);







export default SendMessageContainer















