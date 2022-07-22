import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/users-reducer';
import Users from './Users';
import { connect } from 'react-redux';

let mapStateToProps = (state) => { 
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
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
		setUsers: (users) => { 
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber))
		},
		setTotalUsersCount: (totalCount) => { 
			dispatch(setUsersTotalCountAC(totalCount))
		}
	}
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);