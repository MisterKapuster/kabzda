import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "89119e77-0a67-462d-a946-92675e4a478c"
	}
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data;
			});
	},

	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
			.then(response => {
				return response.data;
			});
	},

	follow(userId) {
		return instance.post(`follow/${userId}`)
			.then(response => {
				return response.data;
			});
	},

	auth() {
		return instance.get(`auth/me`)
			.then(response => {
				return response.data;
			});
	}
}