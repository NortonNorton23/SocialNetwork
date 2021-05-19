import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfile } from '../../redux/profile-reducer';
import Loader from '../common/Loader/Loader';
import { withRouter } from 'react-router';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.userId
		}
		this.props.getProfile(userId)
	}
	render() {
		if (!this.props.profile) {
			return <Loader />
		} else {
			return (
				<Profile profile={this.props.profile} />
			)
		}
	}
}

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
		profile: state.profilePage.profile,
		userId: state.authReducer.data.id,
	}
}

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, { getProfile }),
	withRouter
)(ProfileContainer);