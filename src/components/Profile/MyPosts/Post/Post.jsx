import React from 'react';
import st from './Post.module.css';
import photo from '../../../../assets/images/user.png';

const Post = (props) => {
	return (
		<div className={st.post}>
			<div className={st.post__header}>
				<div className={st.post__avatar}>
					<img src={photo} alt="avatar" />
				</div>
				<div className={st.post__name}>
					<h4>
						{props.name}
					</h4>
				</div>
				<div className={st.post__date}>
					<p>
						{props.date}
					</p>
				</div>
			</div>
			<div className={st.post__content}>
				{props.content}
			</div>
		</div>
	)
}

export default Post;