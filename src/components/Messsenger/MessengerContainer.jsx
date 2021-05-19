import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessage, updateText } from '../../redux/messenger-reducer';
import withAuthRedirect from '../hoc/withAuthRedirect';
import Messenger from './Messenger';

let mapStateToProps = (state) => {
	return {
		newMessageText: state.messengerPage.newMessageText,
		friends: state.messengerPage.friends,
		messages: state.messengerPage.messages,
	}
}

/* let mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => {
			dispatch(ADD_MESSAGE());
		},
		updateText: (text) => {
			dispatch(UPDATE_NEW_MESSAGE_TEXT(text));
		}
	}
} */

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, { addMessage, updateText })
)(Messenger);