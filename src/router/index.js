import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import Home from '@/components/Home'
//Import all components

Vue.use(Router)

export default new Router({
    routes: [
        {
        path: '/',
        name: 'Home',
        component: Home
        }
    ],
    mode: 'history'
})
