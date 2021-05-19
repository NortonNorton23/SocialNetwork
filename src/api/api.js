import * as axios from 'axios';

let baseUrl = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '67407a48-807e-4855-9413-a2a5f95dd2b4'
	}
})

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return baseUrl.get(`users?page=${currentPage}&count=${pageSize}`).then(Response => Response.data)
	},
	postFollow(id) {
		return baseUrl.post(`follow/${id}`).then(Response => Response.data)
	},
	deleteFollow(id) {
		return baseUrl.delete(`follow/${id}`).then(Response => Response.data)
	}
}
export const authAPI = {
	getAuth() {
		return baseUrl.get(`auth/me`).then(Response => Response.data)
	}
}
export const profileAPI = {
	getProfile(userId) {
		return baseUrl.get(`profile/${userId}`).then(Response => Response.data)
	}
}