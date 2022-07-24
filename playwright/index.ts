import { beforeMount } from '@playwright/experimental-ct-vue/hooks';
import Input from '../src/components/Input.vue';

beforeMount(async ({ app }) => {
	app.component(Input)
});
