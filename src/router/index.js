
import {createRouter, createWebHashHistory , createMemoryHistory, createWebHistory} from 'vue-router';
import NotFound from '../layouts/NotFound.vue';
import IndexView from "../views/IndexView.vue";
import CodeOfConductView from "../views/CodeOfConductView.vue";
import EventsView from "../views/EventsView.vue";
import AnnualEventsView from "../views/AnnualEventsView.vue";
import OtherCampusView from "../views/OtherCampusView.vue";


const routes = [
    { path:'/',component: IndexView},
    { path:'/events',component: EventsView},
    { path:'/annual',component: AnnualEventsView},
    { path:'/other-campus',component: OtherCampusView},
    { path:'/code_of_conduct/',component: CodeOfConductView},
    { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
