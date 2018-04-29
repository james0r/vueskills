import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import Home from '@/components/Home'
import AddEducationModal from '@/components/Auth/AddEducationModal'
import AddEmploymentModal from '@/components/Auth/AddEmploymentModal'
import EditProfile from '@/components/Auth/EditProfile'
import ProfilePreview from '@/components/Auth/ProfilePreview'
import Settings from '@/components/Auth/Settings'
import Browse from '@/components/NoAuth/Browse'
import Credits from '@/components/NoAuth/Credits'
import DirectionalLandingModal from '@/components/NoAuth/DirectionalLandingModal'
import Profiles from '@/components/NoAuth/Profiles'
import Register from '@/components/NoAuth/Register'
import SignIn from '@/components/NoAuth/SignIn'
import EditSkillModal from '@/components/Auth/EditSkillModal'
import Profile from '@/components/Auth/Profile'


Vue.use(Router)

export default new Router({
    routes: [
        {
        path: '/',
        name: 'Home',
        component: Home
        },
        {
        path: '/edit',
        name: 'EditProfile',
        component: EditProfile
        },
        {
        path: '/profile',
        name: 'Profile',
        component: Profile
        },
        {
        path: '/preview',
        name: 'ProfilePreview',
        component: ProfilePreview
        },
        {
        path: '/settings',
        name: 'Settings',
        component: Settings
        },
        {
        path: '/browse',
        name: 'Browse',
        component: Browse
        },
        {
        path: '/credits',
        name: 'Credits',
        component: Credits
        },
        {
        path: '/register',
        name: 'Register',
        component: Register
        },
        {
        path: '/signin',
        name: 'SignIn',
        component: SignIn
        },
    ],
    mode: 'history'
})
