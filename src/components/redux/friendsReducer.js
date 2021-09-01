
let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS='SET_USERS'



let inicialState = {
    //followers - who follow me(or follow some user about talk)
    //following - who I follow(or these are the ones the user follow)
    users:
    [
        // { id: 1, name: 'Lev', surname: 'Mosolov', photoUrl: 'https://twitchgid.ru/wp-content/uploads/2020/11/avi-11.jpeg', followers: [2, 5], following: [2, 5], followNow: true },
        //     { id: 2, name: 'Polina', surname: 'Burnashevskaya', photoUrl: 'https://twitchgid.ru/wp-content/uploads/2020/11/avi-11.jpeg', followers: [1], following: [1], followNow: false },
        //     { id: 3, name: 'Ilon', surname: 'Mask', photoUrl: 'https://twitchgid.ru/wp-content/uploads/2020/11/avi-11.jpeg', followers: [5, 4], following: [2, 5], followNow: false },
        //     { id: 4, name: 'Michael', surname: 'Jordan', photoUrl: 'https://twitchgid.ru/wp-content/uploads/2020/11/avi-11.jpeg', followers: [5], following: [1, 3], followNow: false },
        //     { id: 5, name: 'Leonardo', surname: 'Dicaprio', photoUrl: 'https://twitchgid.ru/wp-content/uploads/2020/11/avi-11.jpeg', followers: [1, 2], following: [4, 3], followNow: false }       
    ]   
}

//Is I user's follower
export const friendsReducer = (state=inicialState,action)=>{
    switch (action.type) {
        case FOLLOW:            
            return {
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        console.log(`followNow ${u.followNow} then must be true`)
                        return {
                            ...u,                            
                            followed: true
                        }
                        // for (let uFollowingId of u.following) {
                        //     console.log('ups2')
                        //     if (1 === uFollowingId) {  //NEED REFACTORING
                        //         console.log('followNow: true')
                        //         return {
                        //             ...u,
                        //            // ...u.following.push(1) ,  need refactoring
                        //             followNow: true                                    
                        //         }
                        //     }
                        // }
                    }     return u       
                })
            }            

        case UNFOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,                           
                            followed: false
                        }
                        // for (let i=0; i<u.following.length; i++) {
                        //     if (1 !== u.following[i]) {  //NEED REFACTORING
                        //         console.log('followNow: false')
                        //         return {
                        //             ...u,
                        //             //...u.following.splice(i, 1), need refactoring
                        //             followNow: false                                       
                        //         }
                        //     } 
                        // }
                    }     return u                 
                })
            }        
            
        case SET_USERS:
            return{
                ...state,
                users:[...state.users, ...action.users] //combine two arrays
            }
        
        default:
            return state
    }
}

export const followAC=(userId)=>{
    return{
        type:FOLLOW,
        userId
    }
}

export const unfollowAC=(userId)=>{
    return{
        type:UNFOLLOW,
        userId
    }
}

export const setUsersAC=(users)=>{
    return{
        type:SET_USERS,
        users
    }
}





export default friendsReducer

