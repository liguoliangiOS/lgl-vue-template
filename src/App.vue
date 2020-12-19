<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/images/logo.png">
    <div>
      <router-view></router-view>
      <router-link to="/home">首页</router-link>
      <router-link to="/login">登录</router-link>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

import HelloWorld from './components/helloworld/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
  @import "./assets/css/base.css";
  #app {
    text-align: center;
  }
</style>
