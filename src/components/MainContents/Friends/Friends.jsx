import React from 'react'
import style from './Friends.module.css'
import * as axios from 'axios'



class Friends extends React.Component{
        
    componentDidMount(){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

            this.props.setUsers(response.data.items)
            debugger
        })
    }


    render(){
        return <div className={style.friends}>
        {
             this.props.users.map(u=><div key={u.id}>
                 <span>
                    <div>
                        <img src='https://twitchgid.ru/wp-content/uploads/2020/11/avi-11.jpeg' width='100px' height='100px'/>
                    </div>
                    <div>
                        {                            
                            !u.followed 
                            ?<button onClick={()=>{this.props.follow(u.id)}}>Unfollow now</button>
                            :<button onClick={()=>{this.props.unfollow(u.id)}}>Follow now</button>
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

}


export default Friends