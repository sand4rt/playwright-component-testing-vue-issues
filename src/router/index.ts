import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Page from '../pages/Page.vue';

export const RouteName = Object.freeze({
	TEST: 'test'
})

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: RouteName.TEST,
		props: true,
		component: Page,
	},
];

export const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});
