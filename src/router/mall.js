const isFree = true
export default [
    {
        path: '/mall',
        name: 'mall',
        component: require('@/pages/mall/index').default,
        meta: {
            title: '首页',
            isFree,
        }
    }
]