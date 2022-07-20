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
		case UPDATE_NEW_MESSAGE_BODY: {
			let stateCopy = { ...state };
			stateCopy.newMessageBody = action.body;
			return stateCopy;
		}
		case SEND_MESSAGE: {
			let body = state.newMessageBody;
			let stateCopy = { ...state };
			stateCopy.newMessageBody = '';
			stateCopy.messagesData = [ ...state.messagesData ];
			stateCopy.messagesData.push({ id: 5, message: body });
			return stateCopy;
		}
		default:
			return state;
	}
}

export let sendMessageCreator = () => ({ type: SEND_MESSAGE });
export let updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;