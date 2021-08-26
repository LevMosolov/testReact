import React from 'react'
import style from './Friends.module.css'


let Friends = (props)=>{
  debugger
    //props.users.map((friend)=><FriendMiniAvatarContainer name={friend.name} surname={friend.surname}></FriendMiniAvatarContainer>)
    // {users}
    
    return <div className={style.friends}>
        {
             props.users.map(u=><div key={u.id}>
                 <span>
                    <div>
                        <img src={u.photoUrl} width='100px' height='100px'/>
                    </div>
                    <div>
                        {
                            
                            true ?<button onClick={()=>{props.follow(u.id)}}>Unfollow now</button>:<button onClick={()=>{props.unfollow(u.id)}}>Follow now</button>
                        }
                        

                    </div>
                 </span>
                 <span>
                   
                        <div>{u.name}</div>
                        <div>{u.surname}</div>
                    
                 </span>
             </div>)
           
        }
    </div>
    
}

export default Friends