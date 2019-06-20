const isFree = true
export default [
    {
        path: '/records',
        name: 'records',
        component: require('@/pages/records/index').default,
        meta: {
            title: '记录',
            isFree,
        }
    }
]