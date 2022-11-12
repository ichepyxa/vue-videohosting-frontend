import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import LoginView from '../views/LoginView.vue'
import AddVideoView from '../views/AddVideoView.vue'
import ProfileView from '../views/ProfileView.vue'
import VideoView from '../views/VideoView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/registration',
			name: 'registration',
			component: RegistrationView,
		},
		{
			path: '/login',
			name: 'login',
			component: LoginView,
		},
		{
			path: '/video/add',
			name: 'addVideo',
			component: AddVideoView,
		},
		{
			path: '/profile',
			name: 'profile',
			component: ProfileView,
		},
		{
			path: '/video/:id',
			name: 'video',
			component: VideoView,
		},
		{
			path: '/(.*)*/',
			name: 'notFound',
			component: HomeView,
		},
	],
})

export default router
