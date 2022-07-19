const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
	_state: {
		profilePage: {
			posts: [
				{ message: "Hi, how are you?", likes: "10" },
				{ message: "It's my first post!", likes: "25" }
			],
			newPostText: "it-kabzda.com"
		},
		dialogsPage: {
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
		}
	},
	_callSubscriber() {
		console.log('State changed');
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) { 
		if (action.type === ADD_POST) {
			let newPost = {
				id: 3,
				message: this._state.profilePage.newPostText,
				likes: 0
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.dialogsPage.newMessageBody = action.body;
			this._callSubscriber(this._state);
		} else if (action.type === SEND_MESSAGE) {
			let body = this._state.dialogsPage.newMessageBody;
			this._state.dialogsPage.newMessageBody = '';
			this._state.dialogsPage.messagesData.push({ id: 5, message: body });
			this._callSubscriber(this._state);
		}
	}
}

export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export let sendMessageCreator = () => ({ type: SEND_MESSAGE });
export let updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default store;