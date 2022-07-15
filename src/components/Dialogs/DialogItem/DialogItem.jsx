import React from 'react'
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

export const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;
	return (
		<div className={s.dialogsItems}>
			<NavLink to={path} className={({ isActive }) => (isActive ? s.active : "")}>{props.name}</NavLink>
		</div>
	)
}