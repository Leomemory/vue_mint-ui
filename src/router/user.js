const isFree = true
export default [// 用户
    {
        path: '/user',
        name: 'user',
        component: require('@/pages/user/index').default,
        meta: {
            title: '用户'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: require('@/pages/user/login').default,
        meta: {
            title: '登录',
            isFree
        }
    },
    {
        path: '/login2',
        name: 'login2',
        component: require('@/pages/user/login2').default,
        meta: {
            title: '登录2',
            isFree
        }
    }
]