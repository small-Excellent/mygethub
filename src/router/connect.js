import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '@/components/mainpage'
import login from '@/components/login'
import shoppinglist from '@/components/shoppinglist'
import shoppingcheck from '@/components/shoppingcheck'
import shoppingcar from '@/components/shoppingcar'
import register from '@/components/register'
import shoppingalllists from '@/components/shoppingalllists'
import shopdetail from '@/components/shopdetail'
import tmUser from '@/components/tmUser'
import billlist from '@/components/billlist'

Vue.use(Router)

export default {
  routes: [
    {path:'/',component:mainpage},
    {path:'/login',component:login},
    {path:'/shoppinglist',component:shoppinglist},
    {path:'/shoppingcheck',component:shoppingcheck},
    {path:'/register',component:register},
    {path:'/shoppingcar',component:shoppingcar},
    {path:'/shoppingalllists',component:shoppingalllists},
    {path:'/shopdetail',component:shopdetail},
    {path:'/tmUser',component:tmUser},
    {path:'/billlist',component:billlist}
  ]
}
