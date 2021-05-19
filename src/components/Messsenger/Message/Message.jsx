import React from 'react';
import st from './Message.module.css';

const Message = (props) => {
	return (
		<div className={st.message}>
			<p>
				{props.text}
			</p>
		</div>
	)
}

export default Message;