<template>
  <div id="app">
    <MainScreen msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import MainScreen from './components/MainScreen.vue'
import './styles/globals.css'

export default {
  name: 'App',
  components: {
    MainScreen
  }
}
</script>

<style>

body {
  margin:0;
  padding:0;
}

#app {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  height:100vh;
  background:grey;
  width:100%;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
