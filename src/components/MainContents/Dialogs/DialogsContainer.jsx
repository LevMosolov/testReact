import React from 'react'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

let mapStateToProps = (state)=>{
    return {
        dialogsData:state.dialogs.dialogsData,                              
        messagesData:state.dialogs.messagesData
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
       
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer