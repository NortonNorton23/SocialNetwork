import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import st from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import header from '../../assets/images/header.png';

const Profile = (props) => {
	return (
		<main>
			<img className={st.img} alt='header' src={header} />
			<div className={st.wrapper}>
				<ProfileInfo profile={props.profile} />
				<MyPostsContainer />
			</div>
		</main>
	)
}

export default Profile;