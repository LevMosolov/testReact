let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'

let inicialState = {
    // here field 'friends' is array of id of users who is friends
    users:
    [
        {id:1, name:'Lev', surname: 'Mosolov', follow:[2,5]},
        {id:2, name:'Polina', surname: 'Burnashevskaya', follow:[1]},
        {id:3, name:'Ilon', surname: 'Mask', follow:[1,4]},
        {id:4, name:'Michael', surname:'Jordan',follow:[5]},
        {id:5, name:'Leonardo', surname: 'Dicaprio', follow:[1,2]}
    ],
    follow:[2,3,4,5]
}

export const messageReducer = (state=inicialState,action)=>{
    switch (action.type) {
        case FOLLOW:
            
            
        case UNFOLLOW:

        default:
            break;
    }
}

export const followActionCreator=()=>{
    return{
        type:FOLLOW
    }
}

export const unFollowActionCreator=()=>{
    return{
        type:UNFOLLOW
    }
}




