import React from 'react';
import st from './NavbarFriend.module.css';
import photo from '../../../assets/images/user.png';

const NavbarFriend = (props) => {
	return (
		<li className={st.friends__item}>
			<div className={st.friends__avatar}>
				<img src={photo} alt="avatar" />
			</div>
			{props.name}
		</li>
	)
}

export default NavbarFriend;