import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
// import cxUi from '../../packages/cxui';
// import * as cxUi from './components';
import * as cxUi from 'sycxui'

console.log(cxUi);
Vue.use(VueRouter);
Vue.use(cxUi);

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