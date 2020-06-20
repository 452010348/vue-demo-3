// 路由官网
// https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html#%E5%BC%82%E6%AD%A5%E6%BB%9A%E5%8A%A8

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const default_page = "/HelloWorld" //配置默认登入退出后的跳转页面
const default_login = "/Login"    //配置未登入的跳转页面

// 普通加载  import HelloWorld from '@/components/HelloWorld.vue';
// 路由懒加载 = import() 

// [1] 不需要登入的页面
const HelloWorld = () => import('@/pages/HelloWorld.vue')

// [2] 需要登入的页面
const Home = () => import('@/pages/Home.vue')
const News = () => import('@/pages/News.vue')

// [3] 不需要显示在路由
const Login = () => import('@/pages/Login.vue')




// {1} 不需要登入的页面
const router_index = [
  { path: '/HelloWorld', component: HelloWorld, page_name:"欢迎页"},
]

// {2} 需要登入的页面
const router_views = [
  { path: '/Home', component: Home, page_name:"主页", page_hide: false },
  { path: '/News', component: News, page_name:"新页" },
]

// {3} 不需要显示在路由的页面
const router_default = [
  { path: default_login, component: Login },
  { path: '*', redirect: default_page }    //重定向的目标也可以是一个命名的路由：
]



var router_all = [].concat(router_index, router_views, router_default)
const router = new Router({
  // mode: 'history', // require service support
  //// 期望滚动到哪个的位置
  scrollBehavior() {return { y: 0 } },
  routes: router_all
})
const arr_router_index = []
const arr_router_views = []
router_index.forEach(({ path }) => { arr_router_index.push(path) })
router_views.forEach(({ path }) => { arr_router_views.push(path) })


//全局前置守卫
router.beforeEach((to, from, next) => {
  // console.log("全局前置守卫：", to.query)
  // console.log("全局前置守卫：", to.fullPath)
  console.log("全局前置守卫：", to.path)
  if (to.path == default_login) {
    console.log("进入-Login", to.path)
    let token = !!window.localStorage.getItem('token'); 
    if (token) {
      next({ path: '/' });//已登入！
    } else {
      next();//"未登入！
    }
  }
  else if (arr_router_views.indexOf(to.path) != -1) {
    console.log("需要登入的页面", arr_router_views)
    let token = !!window.localStorage.getItem('token')
    if (token) {
      next(); //已登入
    } else {
      next({ path: default_login });// 未登入
    }
  }
  else if (arr_router_index.indexOf(to.path) != -1) {
    console.log("不需要登入的页面", arr_router_index)
    next();
  }
  else {
    console("未知的页面", to.path)
    next();
  }
})




//全局暴露使用
router.router_default_page = default_page;
router.router_index = router_index
router.router_views = router_views;
router.router_all = router_all;
export default router;