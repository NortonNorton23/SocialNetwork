import React from 'react';
import st from './ProfileInfo.module.css';
import photo from '../../../assets/images/user.png';

const ProfileInfo = (props) => {
	return (
		<div>
			<div className={st.item}>
				<div className={st.item__img}>
					<img alt='avatar' src={!props.profile.photos.large ? photo : props.profile.photos.large} />
				</div>
				<div className={st.bio}>
					<div className={st.bio__label}>
						<h2>{props.profile.fullName}</h2>
					</div>
					<div className={st.bio__text}>
						<ul className={st.bio__list}>
							{!props.profile.contacts.vk ?
								<li></li> :
								<li>VK: <span><a href={'https://' + props.profile.contacts.mainLink}>{props.profile.contacts.vk}</a></span></li>}
							{!props.profile.contacts.github ?
								<li></li> :
								<li>GitHub: <span><a href={'https://' + props.profile.contacts.mainLink}>{props.profile.contacts.github}</a></span></li>}
							{!props.profile.contacts.facebook ?
								<li></li> :
								<li>Facebook: <span><a href={'https://' + props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a></span></li>}
							{!props.profile.contacts.instagram ?
								<li></li> :
								<li>Instagram: <span><a href={'https://' + props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a></span></li>}
							{!props.profile.contacts.twitter ?
								<li></li> :
								<li>Twitter: <span><a href={'https://' + props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a></span></li>}
							{!props.profile.contacts.youtube ?
								<li></li> :
								<li>Youtube: <span><a href={'https://' + props.profile.contacts.youtube}>{props.profile.contacts.youtube}</a></span></li>}
							{!props.profile.contacts.website ?
								<li></li> :
								<li>Website: <span><a href={'https://' + props.profile.contacts.website}>{props.profile.contacts.website}</a></span></li>}
							{!props.profile.contacts.mainLink ?
								<li></li> :
								<li>Website: <span><a href={'https://' + props.profile.contacts.mainLink}>{props.profile.contacts.mainLink}</a></span></li>}
						</ul>
					</div>
				</div>
			</div>
			<div className={st.bio__container}>
				{!props.profile.aboutMe ? <div></div> : <div className={st.bio__about}> <h4>About me:</h4> {props.profile.aboutMe} </div>}
				{props.profile.aboutMe ? <div className={st.bio__about} ><h4>I am looking for a job!</h4></div> : <div></div>}
				{!props.profile.aboutMe ? <div></div> : <div className={st.bio__about}> <h4>I am looking for a job for:</h4> {props.profile.lookingForAJobDescription} </div>}
			</div>
		</div>
	)
}

export default ProfileInfo;