import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import UserManagementComponent from "../twiter/pages/user-management.component.vue";
import UserFormComponent from "../twiter/pages/user-form.component.vue";
import ProfileListComponent from "../twiter/pages/profile-list.component.vue";
import PageNotFountComponent from "../public/pages/page-not-fount.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home',    component: HomeComponent},
        { path: '/list-detail',component:UserManagementComponent},
        {path:'/form',component:UserFormComponent},
        {path:'/profile',component:ProfileListComponent},
        { path: '/',        redirect: '/home'},
        { path: '/:pathMatch(.*)*', component:PageNotFountComponent}
    ]
});

export default router;
