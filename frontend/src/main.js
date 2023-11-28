import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
createApp(App).mount('#app')
createApp(App).use(router).mount('#app');

URLSearchParams.prototype.appendIfExists = function (key,value) {
    if (value !== null && value !== undefined){
        this.append(key,value)
    }
};
