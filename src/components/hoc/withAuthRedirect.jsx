import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

let mapStateToProps = (state) => {
	return { isAuth: state.authReducer.isAuth }
}

let withAuthRedirect = (Component) => {

	let RedirectComponent = (props) => {
		if (!props.isAuth) {
			return <Redirect to='/login' />
		} else {
			return <Component {...props} />
		}
	}

	let connectedRedirect = connect(mapStateToProps)(RedirectComponent)

	return connectedRedirect;
}

export default withAuthRedirect