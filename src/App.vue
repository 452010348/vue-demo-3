<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  computed:{
  },
  methods:{
    on_login_out(){
      console.log('退出')
      window.localStorage.setItem('token',"");
      this.$store.state.is_login = false
      this.$router.push({ path: this.$router.router_default_page })
    }
  }
}
</script>

<style>
</style>
