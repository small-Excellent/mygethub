<template>
  <div id="app">
    <!-- <login></login> -->
    <!-- <register></register> -->
    <!-- <mainpage></mainpage> -->
    <router-view></router-view>
    <!-- <tm-user></tm-user> -->
  </div>
</template>

<script>
import login from './components/login'
import register from './components/register'
import mainpage from './components/mainpage'
import tmUser from './components/tmUser'


export default {
  name: 'App',
  components: {
    login,
    register,
    mainpage,
    tmUser,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin:0 auto;
}
</style>
