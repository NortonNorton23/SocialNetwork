export const addMessage = () => {
	return { type: 'ADD-MESSAGE' }
}
export const updateText = (text) => {
	return { type: 'UPDATE-NEW-MESSAGE-TEXT', text: text }
}

let initialState = {
	friends: [
		{ firstName: 'Tim', lastName: 'Norton', id: '1' },
		{ firstName: 'Valery', lastName: 'Ursu', id: '2' },
		{ firstName: 'Seryouzha', lastName: 'Burchu', id: '3' },
		{ firstName: 'Denis', lastName: 'Tkachenko', id: '4' },
		{ firstName: 'Pavel', lastName: 'Pismenskiy', id: '5' },
		{ firstName: 'Roman', lastName: 'Korneev', id: '6' },
		{ firstName: 'Maxim', lastName: 'Tkachenko', id: '7' }
	],
	messages: [
		{ text: 'Hey man!' },
		{ text: 'Hi!' },
		{ text: 'Go CS?' }
	],
	newMessageText: '',
}

const messengerReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD-MESSAGE':
			let message = {
				text: state.newMessageText
			}
			return {
				...state,
				messages: [...state.messages, message],
				newMessageText: '',
			};
		case 'UPDATE-NEW-MESSAGE-TEXT':
			return {
				...state,
				newMessageText: action.text,
			};
		default:
			return state
	}
}

export default messengerReducer;