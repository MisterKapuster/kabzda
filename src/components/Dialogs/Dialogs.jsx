import React from 'react'
import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';

export const Dialogs = (props) => {
	
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{props.dialogsData.map(item => <DialogItem key={item.id} name={item.name} id={item.id} />) }
			</div>
			<div className={s.messages}>
				{props.messagesData.map(item => <Message key={item.id} message={item.message} />) }
			</div>
		</div>
	)
}
