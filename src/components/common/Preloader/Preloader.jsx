import React from 'react';
import preloader from '../../../assets/images/preloader.svg';

export const Preloader = (props) => {
	return (
		<div>
			<img src={preloader} alt='preloader' />
		</div>
	)
}
