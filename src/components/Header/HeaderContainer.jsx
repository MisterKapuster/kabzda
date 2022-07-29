import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from './Header';
import { setAuthUserData } from '../../redux/auth-reducer';
import { usersAPI } from '../../api/api';

class HeaderCont extends Component {
	componentDidMount() {
		usersAPI.auth().then(data => {
			if (data.resultCode === 0) {
				let { id, email, login } = data;
				this.props.setAuthUserData(id, email, login);
			}
		});
	}

	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
});

export const HeaderContainer = connect(mapStateToProps, { setAuthUserData })(HeaderCont)