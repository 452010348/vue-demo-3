<template>
  <div class="hello">
    <my-nav></my-nav>
    <h1>{{ msg }}</h1>

    <pre>
      第一步: 都是从开始 配置导航绑定页面
        router\index.js
      第二步：立马上手撸起
        
      //路由配置-
      {
       path: '/Home',     //系统默认
       component: {},   //系统默认
       page_hide: false // 用户自定义- true=隐藏 false=显示 默认false
       page_name: "自定义导航名称" // 用户自定义
      },
    </pre>
    <p>
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli 安装教程</a>.
    </p>
    <!-- <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul> -->
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">vue 官网</a></li>
      <!-- <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li> -->
      <!-- <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li> -->
      <!-- <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li> -->
      <!-- <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li> -->
    </ul>
    <h3>这里有教程你不看？</h3>
    <ul>
      <li><a href="https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html#%E5%BC%82%E6%AD%A5%E6%BB%9A%E5%8A%A8" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue 各种组件</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){
    console.log("HelloWorld");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
