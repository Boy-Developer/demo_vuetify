import DashboardLayout from '../pages/layouts/Dashboard.vue';
import Dashboard from '../pages/Dashboard.vue';
import Home from '../pages/Home.vue';
import Form from '../pages/Forms.vue';
import Table from '../pages/Tables.vue';
//import NotFound from '../pages/Notfound.vue';

const routes = [
    {
        path: "/",
        component: DashboardLayout,
        redirect: "/dashboard",
        meta:{
            requiresAuth: true
        },
        children: [
            {
                path: "dashboard",
                name: "ទំព័រដើម",
                component: Dashboard,
                meta:{
                    requiresAuth: true
                }
            },
            {
                path: "/",
                name:"Home",
                component: Home,
                meta:{
                    requiresAuth: true
                }
            },

            {
                path: "/form",
                name:"Form",
                component: Form,
                meta:{
                    requiresAuth: true
                }
            },
            {
                path: "/table",
                name:"Table",
                component: Table,
                meta:{
                    requiresAuth: true
                }
            },            
            {
                path: "*",
                name: "រកពំុឃើញ",
                //component: NotFound
            }, // Not Found handler
        ]
    },
];

export default routes;