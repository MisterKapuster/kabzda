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
		case ADD_POST: {
			let newPost = {
				id: 3,
				message: state.newPostText,
				likes: 0
			};
			let stateCopy = { ...state };
			stateCopy.posts = [...state.posts];
			stateCopy.posts.push(newPost);
			stateCopy.newPostText = '';
			return stateCopy;
		}
		case UPDATE_NEW_POST_TEXT: {
			let stateCopy = { ...state };
			stateCopy.newPostText = action.newText;
			return stateCopy;
		}
		default:
			return state;
	}
}

export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;