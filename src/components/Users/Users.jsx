import React from 'react';
import st from './Users.module.css';
import photo from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
	let pagesCount = Math.ceil(props.usersCount / props.pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	if (pages.length > 10) {
		var minPages = pages.slice(0, 10)
		var maxPage = pages[pages.length - 1]
	} else {
		minPages = pages
		maxPage = pages[pages.length - 1]
	}
	if (props.currentPage >= 10) {
		minPages = pages.slice((props.currentPage - 9), (props.currentPage + 1))
	}
	return (
		<div className={st.main}>
			<h1 className={st.title}>Users</h1>
			<div className={st.items}>
				{props.users.map(u =>
					<div key={u.id} className={st.item}>
						<div className={st.avatar}>
							<img src={u.photos.small === null ? photo : u.photos.small} />
						</div>
						<NavLink to={'/Profile/' + u.id}>
							<div className={st.info}>
								<h3 className={st.name}>
									{u.name}
								</h3>
								<h4 className={st.status}>
									{u.status}
								</h4>
								<h5 className={st.location}>
									{'u.location.city'},<br />
									{'u.location.country'}
								</h5>
							</div>
						</NavLink>
						<div className={st.button}>
							{u.followed
								? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
								: <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.follow(u.id) }}>Follow</button>
							}
						</div>
					</div>
				)}
			</div>
			<div className={st.pages}>
				{minPages.map(p => <span onClick={() => { props.onPageChanged(p) }} className={props.currentPage === p ? st.selected : st.page}>{p}</span>)}
					...
					<span onClick={() => { props.onPageChanged(maxPage) }} className={props.currentPage === maxPage ? st.selected : st.page}>{maxPage}</span>
			</div>
		</div>
	)
}

export default Users;