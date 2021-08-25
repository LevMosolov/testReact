import React from 'react'
import style from './FriendMiniAvatar.module.css'
import imgAvatar from './PinguiLogo9.png'

let FriendMiniAvatar = ()=>{
    return(
        <div className={style.user}>
            <div><img src={imgAvatar} alt='no image' width='100px' height='100px'></img></div>
            <div>Name of User</div>
            <div><button >Follow/Unfollow</button></div>
        </div>
    )
}

export default FriendMiniAvatar
