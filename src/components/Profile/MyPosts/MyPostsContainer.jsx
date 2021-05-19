import React from 'react';
import { connect } from 'react-redux';
import { addNewPost, updateText } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	}
}

/* let mapDispatchToProps = (dispatch) => {
	return {
		addNewPost: () => {
			dispatch(ADD_POST_ACTION_CREATOR());
		},
		updateText: (text) => {
			dispatch(UPDATE_NEW_POST_TEXT_ACTION_CREATOR(text));
		}
	}
} */

const MyPostsContainer = connect(mapStateToProps, { addNewPost, updateText })(MyPosts);

export default MyPostsContainer;