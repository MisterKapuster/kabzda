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
			]
		}
	},
	_callSubscriber() {
		console.log('State changed');
	},
	getState() { 
		return this._state;
	},
	addPost() {
		let newPost = {
			id: 3,
			message: this._state.profilePage.newPostText,
			likes: 0
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	}
}

export default store;