import React from 'react'
import FriendMiniAvatar from './FriendMiniAvatar'
import {connect} from 'react-redux'

let mapStateToProps = ()=>{
    return{

    }
}

let mapDispatchToProps=()=>{
    return{

    }
}

const FriendMiniAvatarContainer = connect(mapStateToProps,mapDispatchToProps)(FriendMiniAvatar)

export default FriendMiniAvatarContainer