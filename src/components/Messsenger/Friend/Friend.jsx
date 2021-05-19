import React from 'react';
import { NavLink } from 'react-router-dom';
import st from './Friend.module.css';
import photo from '../../../assets/images/user.png';

const Friend = (props) => {
	let path = '/Messenger/' + props.id;
	return (
		<li className={st.friend}>
			<NavLink to={path} activeClassName={st.active}>
				<div className={st.avatar}>
					<img src={photo} alt="avatar" />
				</div>
				{props.firstName} {props.lastName}
			</NavLink>
		</li>
	)
}

export default Friend;