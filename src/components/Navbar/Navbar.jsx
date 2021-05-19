import React from 'react';
import { NavLink } from 'react-router-dom';
import st from './Navbar.module.css';
import NavbarFriend from './NavbarFriend/NavbarFriend';

const Navbar = (props) => {

	let friendList = props.state.navbar.friends.map((fr) => <NavbarFriend name={fr.firstName} />);

	return (
		<nav className={st.navigation}>
			<ul className={st.list}>
				<li><NavLink to='/Profile' activeClassName={st.active} >Profile</NavLink></li>
				<li><NavLink to='/Messenger' activeClassName={st.active}>Messenger</NavLink></li>
				<li><NavLink to='/News' activeClassName={st.active}>News</NavLink></li>
				<li><NavLink to='/Music' activeClassName={st.active}>Music</NavLink></li>
				<li><NavLink to='/Users' activeClassName={st.active}>Users</NavLink></li>
				<li><NavLink to='/Settings' activeClassName={st.active}>Settings</NavLink></li>
			</ul>
			<div className={st.friends}>
				<h2>Friends</h2>
				<ul className={st.friends__list}>
					{friendList}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar;