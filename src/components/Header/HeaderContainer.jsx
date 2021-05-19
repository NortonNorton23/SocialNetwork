import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { auth, getOwnProfile } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.auth()
	}
	componentDidUpdate() {
		if (!this.props.ownProfile) {
			this.props.getOwnProfile(this.props.data.id)
		}
	}
	render() {
		debugger
		return <Header profile={this.props.ownProfile} />
	}
}
let mapStateToProps = (state) => {
	return {
		data: state.authReducer.data,
		ownProfile: state.authReducer.ownProfile,
	}
}
export default connect(mapStateToProps, { auth, getOwnProfile })(HeaderContainer);