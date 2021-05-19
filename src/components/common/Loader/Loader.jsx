import React from 'react';
import loader from '../../../assets/images/loader.gif';
import st from './Loader.module.css';

let Loader = (props) => {
	return (
		<div className={st.container}>
			<img src={loader} className={st.img} />
		</div>
	)
}

export default Loader;