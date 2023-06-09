<script>
import Home from './views/home.vue'
import Navbar from './components/Navbar.vue'
import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {
    Navbar
  }
}
</script>

<template>
  <Navbar/>  
  <Home />
  <RouterView/>
  
</template>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");
</style>
