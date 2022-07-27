import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

export const Header = (props) => {
	return (
		<header className={s.header}>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt="logo" />

			<div className={s.loginBlock}>
				{ props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
			</div>
		</header>
	)
}