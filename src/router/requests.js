import axios from 'axios'
import { convertToFormData } from '../use/functions'

async function apiRequest(method, url, data = null) {
	let body, code, response

	if (method === 'patch' && data instanceof FormData) {
		method = 'post'
		data.append('_method', 'patch')
	}

	try {
		response = await axios[method](url, data, {
			headers: {
				'Content-Type':
					data instanceof FormData ? 'multipart/form-data' : 'application/json',
			},
		})
	} catch (error) {
		response = error.response
	}

	body = response.data
	code = response.status

	return { body, code }
}

export async function sendRegistration(data) {
	return await apiRequest('post', '/registration', data)
}

export async function sendLogin(data) {
	return await apiRequest('post', '/auth', data)
}

export async function sendVideo(data) {
	return await apiRequest('post', '/videos', convertToFormData(data))
}

export async function likeVideo(videoId) {
	return await apiRequest('post', `/videos/${videoId}/like`)
}

export async function sendProfile(data) {
	return await apiRequest('patch', '/profile', data)
}

export async function updateVideo(videoId, data) {
	return await apiRequest(
		'patch',
		`/videos/${videoId}`,
		convertToFormData(data)
	)
}

export async function getProfile() {
	return await apiRequest('get', '/profile')
}

export async function videosSearch(queryString, page = 1) {
	return await apiRequest('get', `/videos?search=${queryString}&page=${page}`)
}

export async function getVideoById(videoId) {
	return await apiRequest('get', `/videos/${videoId}`)
}

export async function getMyVideos() {
	return await apiRequest('get', `/videos/my`)
}

export async function userLogout() {
	return await apiRequest('delete', '/logout')
}

export async function deleteUserVideo(videoId) {
	return await apiRequest('delete', `/videos/${videoId}`)
}
