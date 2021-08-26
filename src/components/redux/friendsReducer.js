import imgAva from '../MainContents/Friends/FriendMiniAvatar/PinguiLogo9.png'
let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS='SET_USERS'


let inicialState = {
    //followers - who follow me(or follow some user about talk)
    //following - who I follow(or these are the ones the user follow)
    users:
    [
        {id:1, name:'Lev', surname: 'Mosolov', photoUrl:imgAva, followers:[2,5],following:[2,5]},
        {id:2, name:'Polina', surname: 'Burnashevskaya', photoUrl:imgAva, followers:[1],following:[1]},
        {id:3, name:'Ilon', surname: 'Mask', photoUrl:imgAva, followers:[5,4],following:[2,5]},
        {id:4, name:'Michael', surname:'Jordan', photoUrl:imgAva, followers:[5], following:[1,3]},
        {id:5, name:'Leonardo', surname: 'Dicaprio', photoUrl:imgAva, followers:[1,2], following:[4,3]}
    ]   
}

//Is I user's follower
export const friendsReducer = (state=inicialState,action)=>{
    switch (action.type) {
        case FOLLOW:            
            return {
                ...state, 
                usres: state.users.map(u => {
                    if (u.id === action.userId) {
                        for (let uFollowingId of u.following) {
                            if (1 !== uFollowingId) {  //NEED REFACTORING
                                return {
                                    ...u,
                                    ...u.following.push(1)                                     
                                }
                            } 
                        }
                    }                    
                })
            }            

        case UNFOLLOW:
            return {
                ...state, 
                usres: state.users.map(u => {
                    if (u.id === action.userId) {
                        for (let i=0; i<u.following.length; i++) {
                            if (1 === u.following[i]) {  //NEED REFACTORING
                                return {
                                    ...u,
                                    ...u.following.splice(i, 1)                                        
                                }
                            } 
                        }
                    }                    
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
        userId:userId
    }
}

export const unfollowAC=(userId)=>{
    return{
        type:UNFOLLOW,
        userId:userId
    }
}

export const setUsersAC=(users)=>{
    return{
        type:SET_USERS,
        users
    }
}



export default friendsReducer

