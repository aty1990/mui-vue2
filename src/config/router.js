export default [
    {
        path: '/index',
        component: resolve => require(['pages/home/index'], resolve)
    },
    {
        path: '/hello',
        component: resolve => require(['pages/home/hello'], resolve)
    },
    {
        path: '*', //其他页面，强制跳转到列表页面
        redirect: '/index'
    }
   
]