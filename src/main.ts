import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router';

const app = createApp(App);

app.use(router); // not specified inside the playwright component tests

app.mount('#app')
