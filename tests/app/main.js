import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import {Button, Input, Card} from 'sycxui'
// import aui from 'sycxui'


Vue.use(VueRouter);
Vue.use(Button);
Vue.use(Input);
// Vue.use(Card);
// Vue.use(aui);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            redirect: {
                name:'components'
            }
        },
        {
            name:'components',
            path: '/c',
            component: (resolve) => require(['./components'], resolve)
        }
    ]
});

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');