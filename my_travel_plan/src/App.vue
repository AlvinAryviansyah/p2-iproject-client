<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <HFooter style="background-color:#265bbb" class="h8footer"></HFooter>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HFooter from 'vue-hacktiv8-footer'

export default {
created(){
  this.$store.commit('SET_CURRENT_SEARCH', "")
},
components:{
    Navbar,
    HFooter
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-bg{
  opacity: 0.75;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.h8footer{
  height:100px;
}

.h8footer .logo-hacktiv8{
  height: 100px;
  width: 150px;
}

.h8footer .social-link-image{
  height: 50px;
  width: 50px;
}
</style>
