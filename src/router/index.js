import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/main.vue'
import Auth from '@/components/auth/main.vue'
import Register from '@/components/auth/reg/reg.vue'
import Project from '@/components/all_user_project/main.vue'
import Upload_Project from '@/components/upload_project/main.vue'
import PageNotFound from '@/components/pagenotfound/main.vue'
import project_cat_to_up from  '@/components/project_cat_to_up/main.vue'
import Project_detail from '@/components/project_detail/main.vue'
import com_detail from '@/components/com_detail/main.vue'
import user_profile from '@/components/profile/main.vue'
import contact from '@/components/contact/main.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: Home
        },
        {
            path: '/login',
            name: 'Auth',
            component: Auth
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '*',
            name: 'NotFound',
            component: PageNotFound
        },
        {
            path: '/all_project',
            name: 'all_project',
            component: Project
        },
        {
            path: '/project_cat_to_up',
            name: 'project_cat_to_up',
            component: project_cat_to_up
        }
        ,
        {
            path: '/upload_project/:fr',
            name: 'upload_project',
            component: Upload_Project
        },
        {
            path: '/project_detail/:pid',
            name: 'project_detail',
            component: Project_detail
        },
        {
            path: '/com_detail_by_project/:cid',
            name: 'company_detail',
            component: com_detail
        },
        {
            path: '/user_profile',
            name: 'user_profile',
            component: user_profile
        },
        {
            path: '/contact',
            name: 'contact',
            component:contact

        }


    ]
})
