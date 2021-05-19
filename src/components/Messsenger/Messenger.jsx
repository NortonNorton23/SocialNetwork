import React from 'react';
import Friend from './Friend/Friend';
import Message from './Message/Message';
import st from './Messenger.module.css';

const Messenger = (props) => {
	let friendList = props.friends.map(fr => <Friend firstName={fr.firstName} lastName={fr.lastName} id={fr.id} />);

	let messageList = props.messages.map(ms => <Message text={ms.text} />);


	let addMessage = () => {
		props.addMessage();
	}

	let updateText = (e) => {
		let text = e.target.value;
		props.updateText(text);
	}
	return (
		<div className={st.wrapper}>
			<h1 className={st.title}>
				Messenger
			</h1>
			<div className={st.block}>
				<div className={st.friends}>
					<ul className={st.friendsList}>
						{friendList}
					</ul>
				</div>
				<div className={st.messages}>
					<div className={st.messenger}>
						{messageList}
					</div>
					<div className={st.create}>
						<input placeholder="Message" onChange={updateText} value={props.newMessageText}></input>
						<button onClick={addMessage}>Send</button>
					</div>
				</div>
			</div>
		</div >
	)
}

export default Messenger;