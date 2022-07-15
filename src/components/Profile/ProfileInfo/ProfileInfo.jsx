import React from 'react';
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img src="https://media-cdn.tripadvisor.com/media/photo-s/21/7f/47/a8/sunset-plaza-beach-resort.jpg" alt="sunset" />
			</div>
			<div className={s.descriptionBlock}>
				ava + desc
			</div>
		</div>
	)
}
