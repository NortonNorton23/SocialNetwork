import { authAPI, profileAPI } from "../api/api"

export const setAuthData = (data) => {
	return { type: 'SET_AUTH_DATA', data: data }
}
export const setOwnProfile = (profile) => {
	return { type: 'SET_OWN_PROFILE', ownProfile: profile }
}

export const auth = () => {
	return (dispatch) => {
		authAPI.getAuth().then(data => {
			dispatch(setAuthData(data.data))
		})
	}
}
export const getOwnProfile = (id) => {
	return (dispatch) => {
		profileAPI.getProfile(id).then(data => {
			dispatch(setOwnProfile(data))
		})
	}
}

let initialState = {
	data: {
		id: null,
		email: null,
		login: null,
	},
	isAuth: false,
	ownProfile: null
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_AUTH_DATA':
			if (!action.data.id) {
				return {
					...state,
					data: action.data,
					isAuth: false
				};
			} else {
				return {
					...state,
					data: action.data,
					isAuth: true
				};
			}
		case 'SET_OWN_PROFILE':
			return {
				...state,
				ownProfile: action.ownProfile
			}
		default:
			return state
	}
}

export default authReducer;