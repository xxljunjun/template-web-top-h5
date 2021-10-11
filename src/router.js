//配置路由
import Vue from 'vue'
import VueRouter from  'vue-router'
Vue.use(VueRouter)

import routes from './pages/'


const router =new VueRouter({
    mode:'history',
    routes:[
        ...routes,
        {path:'/*',redirect:'/'}
    ]
})

export default router


