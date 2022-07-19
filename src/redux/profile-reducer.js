const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	posts: [
		{ message: "Hi, how are you?", likes: "10" },
		{ message: "It's my first post!", likes: "25" }
	],
	newPostText: "it-kabzda.com"
};

const profileReducer = (state = initialState, action) => { 
	switch (action.type) { 
		case ADD_POST:
			let newPost = {
				id: 3,
				message: state.newPostText,
				likes: 0
			};
			state.posts.push(newPost);
			state.newPostText = '';
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;
		default:
			return state;
	}
}

export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;