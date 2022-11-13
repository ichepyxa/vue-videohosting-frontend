import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import LoginView from '../views/LoginView.vue'
import CreateVideoView from '../views/CreateVideoView.vue'
import ProfileView from '../views/ProfileView.vue'
import VideoView from '../views/VideoView.vue'
import { getUserProfile } from '../use/functions'

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
			path: '/video/create',
			name: 'createVideo',
			component: CreateVideoView,
			meta: {
				requiredAuth: true,
			},
		},
		{
			path: '/profile',
			name: 'profile',
			component: ProfileView,
			meta: {
				requiredAuth: true,
			},
		},
		{
			path: '/video/:id',
			name: 'video',
			component: VideoView,
		},
	],
})

router.beforeEach(async to => {
	const user = await getUserProfile()

	if (to.meta.requiredAuth && !user) {
		return {
			name: 'login',
		}
	}
})

export default router
