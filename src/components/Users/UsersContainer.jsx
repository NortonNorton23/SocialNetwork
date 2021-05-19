import React from 'react';
import { connect } from 'react-redux';
import { changeCurrentPage, follow, unfollow, getUsers } from '../../redux/users-reducer';
import Users from './Users';
import Loader from '../common/Loader/Loader';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}
	onPageChanged = (pageNumber) => {
		this.props.changeCurrentPage(pageNumber)
		this.props.getUsers(pageNumber, this.props.pageSize)
	}
	render() {
		if (this.props.isFetching === true) {
			return <Loader />
		} else {
			return <Users
				usersCount={this.props.usersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				users={this.props.users}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				onPageChanged={this.onPageChanged}
				followingInProgress={this.props.followingInProgress}
			/>
		}
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		usersCount: state.usersPage.usersCount,
		pageSize: state.usersPage.pageSize,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	}
}
/* let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(FOLLOW_AC(userId))
		},
		unfollow: (userId) => {
			dispatch(UNFOLLOW_AC(userId))
		},
		setUsers: (users) => {
			dispatch(SET_USERS_AC(users))
		},
		setUsersCount: (usersCount) => {
			dispatch(SET_USERS_COUNT_AC(usersCount))
		},
		changeCurrentPage: (currentPage) => {
			dispatch(CHANGE_CURRENT_PAGE(currentPage))
		},
		changeIsFetching: (isFetching) => {
			dispatch(CHANGE_IS_FETCHING(isFetching))
		}
	}
} */

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, { getUsers, follow, unfollow, changeCurrentPage })
)(UsersContainer);