import React from 'react'
import style from './Friends.module.css'
import * as axios from 'axios'



let Friends = (props)=>{

    
    if(props.users.length===0){     
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
            
            props.setUsers(response.data.items)
        })
    }   
    //     props.setUsers(
    //         [ { id: 1, name: 'Lev', surname: 'Mosolov', photoUrl: imgAva, followers: [2, 5], following: [2, 5], followNow: true },
    //         { id: 2, name: 'Polina', surname: 'Burnashevskaya', photoUrl: imgAva, followers: [1], following: [1], followNow: false },
    //         { id: 3, name: 'Ilon', surname: 'Mask', photoUrl: imgAva, followers: [5, 4], following: [2, 5], followNow: false },
    //         { id: 4, name: 'Michael', surname: 'Jordan', photoUrl: imgAva, followers: [5], following: [1, 3], followNow: false },
    //         { id: 5, name: 'Leonardo', surname: 'Dicaprio', photoUrl: imgAva, followers: [1, 2], following: [4, 3], followNow: false }
        
    //            ]
    //     )
    // }
    
    
    
    
    return <div className={style.friends}>
        {
             props.users.map(u=><div key={u.id}>
                 <span>
                    <div>
                        <img src='https://twitchgid.ru/wp-content/uploads/2020/11/avi-11.jpeg' width='100px' height='100px'/>
                    </div>
                    <div>
                        {                            
                            !u.followed 
                            ?<button onClick={()=>{props.follow(u.id)}}>Unfollow now</button>
                            :<button onClick={()=>{props.unfollow(u.id)}}>Follow now</button>
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