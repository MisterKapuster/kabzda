import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

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
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

		this._callSubscriber(this._state);
	}
}

export default store;