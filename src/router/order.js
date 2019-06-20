const isFree = true
export default [
    {
        path: '/order',
        name: 'order',
        component: require('@/pages/order/index').default,
        meta: {
            title: '订单',
            isFree
        }
    }
]