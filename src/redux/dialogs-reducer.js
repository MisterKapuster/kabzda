const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	dialogsData: [
		{ id: 1, name: 'Dimych' },
		{ id: 2, name: 'Andrey' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Valera' },
	],
	messagesData: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How are You' },
		{ id: 3, message: 'You' },
		{ id: 4, message: 'Good Bye' },
	],
	newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) { 
		case UPDATE_NEW_MESSAGE_BODY: 
			return {
				...state,
				newMessageBody: action.body,
			};
		case SEND_MESSAGE: {
			let body = state.newMessageBody;
			return {
				...state,
				newMessageBody: '',
				messagesData: [...state.messagesData, { id: 5, message: body }]
			};
		}
		default:
			return state;
	}
}

export let sendMessageCreator = () => ({ type: SEND_MESSAGE });
export let updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;