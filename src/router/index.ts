import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Page from '../pages/Page.vue';


const routes: RouteRecordRaw[] = [
	{
		path: '/test',
		name: 'test',
		props: true,
		component: Page,
	},
];

export const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});
