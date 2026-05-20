import { createApp } from 'vue';

import { createMemoryHistory, createWebHashHistory, createWebHistory, createRouter } from 'vue-router'

import App from './App.vue';
import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import Messages from './pages/Messages.vue';
import Buttons from './pages/Buttons.vue';
import ChuckNorris from './pages/ChuckNorris.vue';
import Rickandmorty from './pages/Rickandmorty.vue';
import WebApis from './pages/WebApis.vue';
import Leaflet from './pages/Leaflet.vue';
import Chat from './pages/Chat.vue';

const routes = [
    { path: '/', component: ToDo, name: 'Todolist' },
    { path: '/modals', component: Modals, name: 'Modals' },
    { path: '/messages', component: Messages, name: 'Messages' },
    { path: '/buttons', component: Buttons, name: 'Buttons' },
    { path: '/chuck', component: ChuckNorris, name: 'Chuck Norris' },
    { path: '/rick', component: Rickandmorty, name: 'Rick and morty' },
    { path: '/web', component: WebApis, name: 'Webapis' },
    { path: '/leaflet', component: Leaflet, name: 'Leaflet' },
    { path: '/chat', component: Chat, name: 'Chat' }

]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App);
app.use(router)
app.mount('#app');