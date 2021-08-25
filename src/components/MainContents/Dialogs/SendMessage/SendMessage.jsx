import React from 'react'
import style from './SendMessage.module.css'
let newMessageElement = React.createRef();




const SendMessage =(props)=>{

    let sendMessage = ()=>{
        let text=newMessageElement.current.value;
        props.addMessageActionCreator(text)           
    }

    let updateNewMessageText=()=>{
        let text=newMessageElement.current.value;        
        props.updateNewMessageTextActionCreator(text)
    }

    return(
        <div className={style.sendMessage}>
            <div>
                <textarea ref={newMessageElement} value={props.newMessageText} onChange={updateNewMessageText}></textarea>
            </div>
            <div>
                <button onClick={sendMessage} >SendMessage</button>
            </div>
        </div>
    )
}

export default SendMessage