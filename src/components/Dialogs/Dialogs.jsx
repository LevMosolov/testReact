import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import SendMessageContainer from './SendMessage/SendMessageContainer'





const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map((dialog)=><DialogItem name={dialog.name} key={dialog.id} id={dialog.id}></DialogItem>)
    let messagesElements = props.messagesData.map((messageEl)=><Message message={messageEl.message} key={messageEl.id}></Message>)

  
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <div className={style.void}>WNT</div>
            <div className={style.sendMessage}>
                <SendMessageContainer state ={props}/>               
            </div>
        </div>
    )
}

export default Dialogs