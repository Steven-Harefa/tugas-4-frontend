import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'

import todo from './components/todo.vue'
import user from './components/user.vue'
import auth from './components/auth.vue'

const rute = createRouter({

    history : createWebHistory(),

    routes : [

        {path : '/', component : auth},
        {path : '/todo', component : todo},
        {path : '/user', component : user}

    ],

})

createApp(App).use(rute).mount('#app')
