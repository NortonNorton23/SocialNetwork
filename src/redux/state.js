import profileReducer from './profile-reducer';
import messengerReducer from './messenger-reducer';

let store = {
	_state: {
		profilePage: {
			posts: [
				{ name: 'Tim Norton', date: '02.04.2021', content: 'Add me to friends!' },
				{ name: 'Tim Norton', date: '01.04.2021', content: 'Hey, how are you?' },
				{ name: 'Tim Norton', date: '31.03.2021', content: 'It is my first post!' }
			],
			newPostText: '',
		},
		messengerPage: {
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
		},
		navbar: {
			friends: [
				{ firstName: 'Tim', lastName: 'Norton', id: '1' },
				{ firstName: 'Valery', lastName: 'Ursu', id: '2' },
				{ firstName: 'Seryouzha', lastName: 'Burchu', id: '3' },
				{ firstName: 'Denis', lastName: 'Tkachenko', id: '4' },
				{ firstName: 'Pavel', lastName: 'Pismenskiy', id: '5' },
				{ firstName: 'Roman', lastName: 'Korneev', id: '6' },
				{ firstName: 'Maxim', lastName: 'Tkachenko', id: '7' }
			],
		}
	},
	_callSubsrciber() {
		console.log('State changed');
	},

	getState() {
		return this._state
	},
	subscriber(observer) {
		this._callSubsrciber = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.messengerPage = messengerReducer(this._state.messengerPage, action)
		this._callSubsrciber();
	}
}

export default store;