<template>
  <div>
    Login
    <button @click="on_login">登入</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
  },
  mounted(){
    console.log("Login");
  },
  //方法
  methods: {
    on_login(){
      console.log('登入');
      window.localStorage.setItem('token', ""+ Date.now())
      this.$store.state.is_login = true
       this.$router.push({ path: this.$router.router_default_page })
    }
  },
}
</script>

<style scoped>
</style>
