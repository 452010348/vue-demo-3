import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js';
import router from './router/index.js';

Vue.config.productionTip = false

console.log("process.env.NODE_ENV",":",process.env.NODE_ENV);
console.log("process.env.VUE_APP_URL",":",process.env.VUE_APP_URL);

import nav from '@/components/nav.vue'
Vue.component("my-nav", nav);//全局自定义组件

window.$this = new Vue({
  store,
  router,
  render: h => h(App),
  // computed: {
  // },
  // //定义
  // data(){
  //   return {}
  // },
  // //方法
  // methods: {
  // },
  // //过滤方法
  // filters: {
  // },
  // //监听 内部调用
  // watch: {
  // },
  // beforeCreate: function () {
  //   console.group('beforeCreate 创建前状态===============》');
  //   console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
  //   console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
  //   console.log("%c%s", "color:red", "message: ");//undefined
  //   console.groupEnd('beforeCreate 创建前状态===============》');
  // },
  // created: function () {
  //   console.group('created 创建完毕状态===============》');
  //   console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
  //   console.log("%c%s", "color:green", "data   : " + this.$data); //[object Object]  =>  已被初始化
  //   console.log("%c%s", "color:green", "message: "); //Welcome Vue  =>  已被初始化
  // },
  // beforeMount: function () {
  //   console.group('beforeMount 挂载前状态===============》');
  //   console.log("%c%s", "color:green", "el     : " + (this.$el)); //已被初始化
  //   console.log(this.$el); // 当前挂在的元素
  //   console.log("%c%s", "color:green", "data   : " + this.$data); //已被初始化
  //   console.log("%c%s", "color:green", "message: "); //已被初始化
  //   console.groupEnd('beforeMount 挂载前状态===============》');
  // },
  // mounted: function () {
  //   console.group('mounted 挂载结束状态===============》');
  //   console.log("%c%s", "color:green", "el     : " + this.$el); //已被初始化
  //   console.log(this.$el);
  //   console.log("%c%s", "color:green", "data   : " + this.$data); //已被初始化
  //   console.log("%c%s", "color:green", "message: "); //已被初始化
  //   console.groupEnd('mounted 挂载结束状态===============》');
  // },
  // beforeUpdate: function () {
  //   alert("更新前状态");
  //   console.group('beforeUpdate 更新前状态===============》'); //这里指的是页面渲染新数据之前
  //   console.log("%c%s", "color:green", "el     : " + this.$el);
  //   console.log(this.$el);
  //   console.log("%c%s", "color:green", "data   : " + this.$data);
  //   console.log("%c%s", "color:green", "message: ");
  //   alert("更新前状态2");
  //   console.groupEnd('beforeUpdate 更新前状态===============》');//这里指的是页面渲染新数据之前
  // },
  // updated: function () {
  //   console.group('updated 更新完成状态===============》');
  //   console.log("%c%s", "color:green", "el     : " + this.$el);
  //   console.log(this.$el);
  //   console.log("%c%s", "color:green", "data   : " + this.$data);
  //   console.log("%c%s", "color:green", "message: ");
  //   console.groupEnd('updated 更新完成状态===============》');
  // },
  // beforeDestroy: function () {
  //   console.group('beforeDestroy 销毁前状态===============》');
  //   console.log("%c%s", "color:red", "el     : " + this.$el);
  //   console.log(this.$el);
  //   console.log("%c%s", "color:red", "data   : " + this.$data);
  //   console.log("%c%s", "color:red", "message: ");
  //   console.groupEnd('beforeDestroy 销毁前状态===============》');
  // },
  // destroyed: function () {
  //   console.group('destroyed 销毁完成状态===============》');
  //   console.log("%c%s", "color:red", "el     : " + this.$el);
  //   console.log(this.$el);
  //   console.log("%c%s", "color:red", "data   : " + this.$data);
  //   console.log("%c%s", "color:red", "message: ");
  //   console.groupEnd('destroyed 销毁完成状态===============》');
  // }
}).$mount('#app')
