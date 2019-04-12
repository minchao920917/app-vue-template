//入口页
const main = r=>require.ensure([],()=>r(require('@/view/index.vue')),'main')
//路由
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/main',
      component:main,
      name:'入口页',
      children:[
    //   {path:'/main/integral', component:integral},
      ]
    }
  ]
})
