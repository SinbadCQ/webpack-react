import Loadable from '../components/loadable'

export default [
    {
        path: '/',
        component: Loadable(() => import('../pages/home')),
        exact: true
    },
    {
        path: '/detail',
        component: Loadable(() => import('../pages/detail')),
        routes: [
            { path: '/detail', component: Loadable(() => import('../pages/detail/site')), exact: true },
            { path: '/detail/activity', component: Loadable(() => import('../pages/detail/activity')) }
        ],
    },
    {
        path: '/carousel',
        component: Loadable(() => import('../pages/carousel')),
    }
]
