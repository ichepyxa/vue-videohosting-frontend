import axios from 'axios'
import { getProfile } from '../router/requests'

export function setAuthUserToken(token) {
	localStorage.setItem('auth-user-token', token)
	axios.defaults.headers['Authorization'] = `Bearer ${token}`
}

export function removeAuthUserToken() {
	localStorage.removeItem('auth-user-token')
}

export async function getUserProfile() {
	let user = null

	const { body, code } = await getProfile()
	if (code === 200) {
		user = body
	}

	return user
}
