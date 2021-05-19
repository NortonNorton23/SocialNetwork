import { profileAPI } from "../api/api"

export const addNewPost = () => {
	return { type: 'ADD_POST' }
}
export const updateText = (text) => {
	return { type: 'UPDATE_NEW_POST_TEXT', text: text }
}
export const setProfile = (profile) => {
	return { type: 'SET_PROFILE', profile: profile }
}

export const getProfile = (userId) => {
	return (dispatch) => {
		profileAPI.getProfile(userId).then(data => {
			dispatch(setProfile(data))
		})
	}
}

let initialState = {
	posts: [
		{ name: 'Tim Norton', date: '02.04.2021', content: 'Add me to friends!' },
		{ name: 'Tim Norton', date: '01.04.2021', content: 'Hey, how are you?' },
		{ name: 'Tim Norton', date: '31.03.2021', content: 'It is my first post!' }
	],
	newPostText: '',
	profile: null,
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_POST':
			let post = {
				name: 'Tim Norton',
				date: '06.04.2021',
				content: state.newPostText
			}
			return {
				...state,
				posts: [post, ...state.posts],
				newPostText: '',
			};
		case 'UPDATE_NEW_POST_TEXT':
			return {
				...state,
				newPostText: action.text,
			};
		case 'SET_PROFILE':
			return {
				...state,
				profile: action.profile
			}
		default:
			return state
	}
}

export default profileReducer;