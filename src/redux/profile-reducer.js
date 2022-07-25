const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
	posts: [
		{ message: "Hi, how are you?", likes: "10" },
		{ message: "It's my first post!", likes: "25" }
	],
	newPostText: "it-kabzda.com",
	profile: null
};

const profileReducer = (state = initialState, action) => { 
	switch (action.type) { 
		case ADD_POST: {
			let newPost = {
				id: 3,
				message: state.newPostText,
				likes: 0
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			}
		}
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText
			}
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		default:
			return state;
	}
}

export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;