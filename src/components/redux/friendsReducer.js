
let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS='SET_USERS'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let SET_TOTAL_FRIENDS_COUNT='SET_TOTAL_FRIENDS_COUNT'
let TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING'




let inicialState = {    
    users:[] ,
    pageSize:4,
    totalFriendsCount:19  ,
    currentPage:2,
    isFetching:true
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
            return {
                ...state,
                users:action.users 
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage:action.currentPage
            }
            case SET_TOTAL_FRIENDS_COUNT:
                return{
                    ...state,
                    totalFriendsCount:action.totalCount

                }

            case TOGGLE_IS_FETCHING:
                return{
                    ...state,
                    isFetching:action.isFetching
                }
        default:
            return state
    }
}

export const follow=(userId)=>{
    return{
        type:FOLLOW,
        userId
    }
}

export const unfollow=(userId)=>{
    return{
        type:UNFOLLOW,
        userId
    }
}

export const setUsers=(users)=>{
    return{
        type:SET_USERS,
        users
    }
}

export const setCurrentPage=(currentPage)=>{
    return{
        type:SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalFriendsCount=(totalCount)=>{
    return{
        type:SET_TOTAL_FRIENDS_COUNT,
        totalCount
    }
}

export const setToggleIsFetchig=(isFetching)=>{
    return{
        type:TOGGLE_IS_FETCHING,
        isFetching
    }
}



export default friendsReducer

