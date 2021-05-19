import React from 'react';
import st from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

	let postList = props.posts.map(ps => <Post
		name={ps.name}
		date={ps.date}
		content={ps.content}
	/>)

	let addNewPost = () => {
		props.addNewPost();
	}

	let updateText = (e) => {
		let text = e.target.value;
		props.updateText(text);
	}

	return (
		<div className={st.wall}>
			<div className={st.input}>
				<div>
					<input
						placeholder="What's new?"
						onChange={updateText}
						value={props.newPostText}
					></input>
					<button
						onClick={addNewPost}>
						Send
						</button>
				</div>
			</div>
			<div className={st.wall__title}>
				<h3>My posts</h3>
			</div>
			{postList}
		</div>
	)
}

export default MyPosts;