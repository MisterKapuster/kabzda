import React from 'react';
import s from './Post.module.css';

export const Post = (props) => {
	return (
		<div className={s.item}>
			<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png" alt="avatar" />
			{props.message}
			<div>
				<span>like {props.likes}</span>
			</div>
		</div>
	)
}
