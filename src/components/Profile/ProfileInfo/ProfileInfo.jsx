import React from 'react';
import s from './ProfileInfo.module.css';
import { Preloader } from '../../common/Preloader/Preloader';

export const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div>
			<div className={s.bgPhoto}>
				<img src="https://media-cdn.tripadvisor.com/media/photo-s/21/7f/47/a8/sunset-plaza-beach-resort.jpg" alt="sunset" />
			</div>
			<div className={s.descriptionBlock}>
				<div className={s.avaBlock}>
					<img src={props.profile.photos.large} alt='avatar' />
				</div>
				<div className={s.infoBlock}>
					<div className={s.nameBlock}>{props.profile.fullName}</div>
					<div className={s.about}>{props.profile.aboutMe}</div>
				</div>
			</div>
		</div>
	)
}
