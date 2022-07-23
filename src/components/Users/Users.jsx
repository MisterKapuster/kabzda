import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.jfif';

export const Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	// for (let i = 1; i <= pagesCount; i++) {
	for (let i = 1; i <= 9; i++) {
		pages.push(i);
	}
	return (
		<div>
			<div className={styles.pagination}>
				{pages.map((p, i) => {
					return <span key={i} className={props.currentPage === p ? styles.selectedPage : ""} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
				})}
			</div>
			{
				props.users.map((u, i) => <div key={i}>
					<span>
						<div>
							<img src={u.photos.small != null ? u.photos.small : userPhoto} alt='photo' className={styles.userPhoto} />
						</div>
						<div>
							{
								u.followed
									? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
									: <button onClick={() => { props.follow(u.id) }}>Follow</button>
							}
						</div>
					</span>
					<span>
						<span>
							<div>
								{u.name}
							</div>
							<div>
								{u.status}
							</div>
						</span>
						<span>
							<div>
								{"u.location.country"}
							</div>
							<div>
								{"u.location.city"}
							</div>
						</span>
					</span>
				</div>)
			}
		</div >
	)
}
