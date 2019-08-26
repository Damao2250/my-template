<template>
  <div id="app">
    <a href="#" @click="home">home</a> | <a href="#" @click="about">about</a>
    <div style="margin-top:50px;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    home(){
      this.$router.push("/")
    },
    about(){
      this.$router.push("about")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
