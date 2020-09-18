<template>
  <div id="app" >
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/shared/header";
export default {
  name: 'app',
  components: {
    appHeader: Header
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
</style>
