import React from 'react'
import Friends from './Friends'
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC} from '../../redux/friendsReducer'


let mapStateToProps = (state)=>{    
    return {        
        users:state.friends.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        }
    }
}



const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer




























