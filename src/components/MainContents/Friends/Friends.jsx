import React from 'react'
import FriendMiniAvatarContainer from './FriendMiniAvatar/FriendMiniAvatarContainer'
import style from './Friends.module.css'


let Friends = (props)=>{
    
    return (
    <div className={style.friends}>
       <FriendMiniAvatarContainer></FriendMiniAvatarContainer>
    </div>
    )
}

export default Friends