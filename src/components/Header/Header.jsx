import React from 'react';
import st from './Header.module.css';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import photo from '../../assets/images/user.png'

const Header = (props) => {
	return (
		<header className={st.header}>
			<img className={st.logo} alt='logo' src={logo} />
			{!props.profile
				? <NavLink to='/login' className={st.login}>Login</NavLink>
				: <div className={st.logined}>
					<img src={props.profile.photos.small ? props.profile.photos.small : photo} />
					<h4>{props.profile.fullName}</h4>
				</div>}
		</header>
	)
}

export default Header;