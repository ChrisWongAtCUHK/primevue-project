import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';


const app = createApp(App);

app.use(PrimeVue, { ripple: true });

app.component('Button', Button);

app.mount('#app');