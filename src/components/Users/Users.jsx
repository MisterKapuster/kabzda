import React, { Component } from 'react';
import * as axios from 'axios';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.jfif';

export default class Users extends Component {
	componentDidMount() { 
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			}); 
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios
			.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
			}); 
	}
	render() {
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) { 
			pages.push(i);
		}
		return (
			<div>
				<div className={styles.pagination}>
					{pages.map((p, i) => {
						return <span key={i} className={this.props.currentPage === p ? styles.selectedPage : ""} onClick={(e) => {this.onPageChanged(p)}}>{ p }</span>
					})}
				</div>
				{
					this.props.users.map((u, i) => <div key={i}>
						<span>
							<div>
								<img src={u.photos.small != null ? u.photos.small : userPhoto} alt='photo' className={styles.userPhoto} />
							</div>
							<div>
								{
									u.followed
										? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
										: <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
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
}