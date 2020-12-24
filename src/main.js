// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store/store'
// import router from './router'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import tmUser from './components/tmUser'
import axios from "axios"
import routerConfig from './router/connect.js'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)

const router = new VueRouter(routerConfig);
// const router = new VueRouter({
//   mode:"history",
//   base:__dirname,
//   routes:[
//     {path:"/",component:tmUser}
//   ]
// }),
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
