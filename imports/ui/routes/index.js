
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router.js';

Vue.use(VueRouter);

// configure router
const router = new VueRouter({
    routes,// short for routes: routes
    mode: 'history'
     
});

export default router;