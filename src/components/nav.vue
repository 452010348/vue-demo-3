<template>
  <div>

    <p v-for="(item,i) in $router.router_views" :key="`a${i}`" v-show="item.page_hide!=true">
      <router-link :to="item.path">{{item.page_name}} </router-link> - 需要登入
    </p>

    <p v-for="(item,i) in $router.router_index" :key="`b${i}`" v-show="item.page_hide!=true">
      <router-link :to="item.path">{{item.page_name}}</router-link> - 不需要登入的页面
    </p>

    <p>
      <button v-if="$store.state.is_login" @click="on_login_out">退出登入</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {},
  mounted() {
    console.log("Nav");
  },
  methods: {
    on_login_out() {
      console.log("退出");
      window.localStorage.setItem("token", "");
      this.$store.state.is_login = false;
      this.$router.push({ path: this.$router.router_default_page });
    }
  }
};
</script>

<style scoped>
</style>
