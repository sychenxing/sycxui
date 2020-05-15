import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import CxUi from 'sycxui'

Vue.use(VueRouter);
Vue.use(CxUi);

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