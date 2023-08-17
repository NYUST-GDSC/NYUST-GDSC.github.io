import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../layouts/NotFound.vue';
import IndexView from "../views/IndexView.vue";
import CodeOfConductView from "../views/CodeOfConductView.vue";


const routes = [
    { path:'/',component: IndexView},
    { path:'/code_of_conduct/',component: CodeOfConductView},
    { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
