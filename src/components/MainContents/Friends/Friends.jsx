import React from 'react'
import style from './Friends.module.css'
import * as axios from 'axios'



class Friends extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(response.data.items)
            
        })
    }


    render() {

        //get number of pages and if data is relevant - round up
        let pagesCount = this.props.totalFriendsCount / this.props.pageSize
        Number.isInteger(pagesCount) ? pagesCount = Math.ceil(pagesCount) : pagesCount = 0

        // create pagination
        let pages = []
        debugger
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div className={style.friends}>
             
               {
                    pages.map(p => {
                        return<div> <span className={this.props.currentPage===p && style.selectedPage}>{p}</span></div>
                    })
               }
           

            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src='https://twitchgid.ru/wp-content/uploads/2020/11/avi-11.jpeg' width='100px' height='100px' />
                        </div>
                        <div>
                            {
                                !u.followed
                                    ? <button onClick={() => { this.props.follow(u.id) }}>Unfollow now</button>
                                    : <button onClick={() => { this.props.unfollow(u.id) }}>Follow now</button>
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