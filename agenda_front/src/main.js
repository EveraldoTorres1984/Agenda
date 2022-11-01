import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from './bootstrap';

import {library} from '@fortawesome/fontawesome-svg-core'
import { faUser, faEnvelope, faLock  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUser, faEnvelope, faLock)

createApp(App).component('fa', FontAwesomeIcon).use(store).use(router).use(bootstrap).mount('#app')