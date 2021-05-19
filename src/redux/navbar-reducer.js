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
}

const navbarReducer = (state = initialState, action) => {
	return state;
}

export default navbarReducer;