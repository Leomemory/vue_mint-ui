const isFree = true
export default [
    {
        path: '/contract',
        name: 'contract',
        component: require('@/pages/contract/index').default,
        meta: {
            title: '合同',
            isFree,
        }
    }
]