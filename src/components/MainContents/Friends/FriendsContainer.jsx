import React from 'react'
import { connect } from 'react-redux'
import { follow,
    unfollow, 
    setUsers,
    setCurrentPage,
    setTotalFriendsCount,
    setToggleIsFetchig} from '../../redux/friendsReducer'
import Friends from './Friends'
import * as axios from 'axios'


class FriendsAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setToggleIsFetchig(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setToggleIsFetchig(false)
            
        this.props.setUsers(response.data.items)
            this.props.setTotalFriendsCount(response.data.totalCount)

        })
    }

    onPageChanged=(pageNumber)=>{
        this.props.setToggleIsFetchig(true)

        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setToggleIsFetchig(false)
            
        this.props.setUsers(response.data.items)
        })
    }
    render() {return <>     
        {this.props.isFetching ? <div>DOWNLOADING</div>:null}
         <Friends 
        totalFriendsCount={this.props.totalFriendsCount} 
        pageSize={this.props.pageSize} 
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        />
        </>
    }

}


let mapStateToProps = (state)=>{    
    return {        
        users:state.friends.users,
        pageSize:state.friends.pageSize,
        totalFriendsCount:state.friends.totalFriendsCount,
        currentPage:state.friends.currentPage,
        isFetching:state.friends.isFetching
    }
}

const FriendsContainer = connect(mapStateToProps, 
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalFriendsCount,
        setToggleIsFetchig
    }
    )(FriendsAPIComponent)

export default FriendsContainer




























