<template>
  <div id="app">
    <!-- 测试指令用的代码 -->
    <!-- <h1 v-upper="msg"></h1> -->
    <Header/>
    <router-view></router-view>
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  // data() {
  //   return {
  //     msg:'abc'
  //   }
  // },
  components: {
    Header,
    Footer
  },
  mounted() {
    //App.vue只会挂载一次
    this.$store.dispatch('categoryList');
  },
}
</script>

<style>

</style>
