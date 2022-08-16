import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.jfif';
import { usersAPI } from '../../api/api';

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
							<NavLink to={'/profile/' + u.id}>
								<img src={u.photos.small != null ? u.photos.small : userPhoto} alt='photo' className={styles.userPhoto} />
							</NavLink>
						</div>
						<div>
							{
								u.followed
									? <button disabled={ props.followingInProgress.some(id => id === u.id) } onClick={() => {
										props.toggleFollowingProgress(true, u.id);
										usersAPI.unfollow(u.id).then(data => {
											if (data.resultCode === 0) { props.unfollow(u.id) }
											props.toggleFollowingProgress(false, u.id);
										});
									}}>Unfollow</button>
									: <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
										props.toggleFollowingProgress(true, u.id);
										usersAPI.follow(u.id).then(data => {
											if (data.resultCode === 0) { props.follow(u.id) }
											props.toggleFollowingProgress(false, u.id);
										});
									}}>Follow</button>
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
