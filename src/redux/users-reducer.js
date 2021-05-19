import { usersAPI } from "../api/api"

export const followAccept = (userId) => {
	return { type: 'FOLLOW', userId: userId }
}
export const unfollowAccept = (userId) => {
	return { type: 'UNFOLLOW', userId: userId }
}
export const setUsers = (users) => {
	return { type: 'SET_USERS', users: users }
}
export const setUsersCount = (usersCount) => {
	return { type: 'SET_USERS_COUNT', usersCount: usersCount }
}
export const changeCurrentPage = (currentPage) => {
	return { type: 'CHANGE_CURRENT_PAGE', currentPage: currentPage }
}
export const changeIsFetching = (isFetching) => {
	return { type: 'CHANGE_IS_FETCHING', isFetching: isFetching }
}
export const toggleFollowingInProgress = (inProgress, id) => {
	return { type: 'TOGGLE_FOLLOWING_IN_PROGRESS', inProgress, id }
}

export const getUsers = (currentPage, pageSize) => {
	return (dispatch) => {
		if (initialState.users.length === 0) {
			dispatch(changeIsFetching(true))
			usersAPI.getUsers(currentPage, pageSize).then(data => {
				dispatch(setUsers(data.items))
				dispatch(setUsersCount(data.totalCount))
				dispatch(changeIsFetching(false))
			})
		}
	}
}

export const unfollow = (id) => {
	return (dispatch) => {
		dispatch(toggleFollowingInProgress(true, id))
		usersAPI.deleteFollow(id).then(data => {
			if (data.resultCode === 0) {
				dispatch(unfollowAccept(id))
			}
			dispatch(toggleFollowingInProgress(false, id))
		})
	}
}
export const follow = (id) => {
	return (dispatch) => {
		dispatch(toggleFollowingInProgress(true, id))
		usersAPI.postFollow(id).then(data => {
			if (data.resultCode === 0) {
				dispatch(followAccept(id))
			}
			dispatch(toggleFollowingInProgress(false, id))
		})
	}
}

let initialState = {
	users: [],
	usersCount: 0,
	pageSize: 4,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FOLLOW':
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {
							...u,
							followed: true
						}
					} return u
				})
			}
		case 'UNFOLLOW':
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {
							...u,
							followed: false
						}
					} return u
				})
			}
		case 'SET_USERS':
			return {
				...state,
				users: [...action.users]
			}
		case 'SET_USERS_COUNT':
			return {
				...state,
				usersCount: action.usersCount
			}
		case 'CHANGE_CURRENT_PAGE':
			return {
				...state,
				currentPage: action.currentPage
			}
		case 'CHANGE_IS_FETCHING':
			return {
				...state,
				isFetching: action.isFetching
			}
		case 'TOGGLE_FOLLOWING_IN_PROGRESS':
			return {
				...state,
				followingInProgress: action.inProgress
					? [...state.followingInProgress, action.id]
					: state.followingInProgress.filter(id => id !== action.id)
			}
		default:
			return state
	}
}

export default usersReducer;