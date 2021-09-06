import React from "react";
import style from './Friends.module.css'

let Friends = (props) => {
    //get number of pages and if data is relevant - round up
    let pagesCount = props.totalFriendsCount / props.pageSize
    pagesCount = Math.ceil(pagesCount)
    if (!Number.isInteger(pagesCount)) pagesCount = 0

    // create pagination
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {

        pages.push(i)
    }
    
    return <div className={style.friends}>
        <div >
            {
                pages.map(p => {
                    return <span
                        className={props.currentPage === p && style.selectedPage}
                        id={style.mouseOnPageNumber}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}
                    > {p}
                    </span>
                })
            }
        </div>


        <div>
            {

                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src='https://twitchgid.ru/wp-content/uploads/2020/11/avi-11.jpeg' width='100px' height='100px' />
                        </div>
                        <div>
                            {
                                !u.followed
                                    ? <button onClick={() => { props.follow(u.id) }}>Unfollow now</button>
                                    : <button onClick={() => { props.unfollow(u.id) }}>Follow now</button>
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
    </div>
}

export default Friends