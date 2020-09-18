<template>
  <div class="container-fluid demo bg_lightBlue">
    <nav class="navbar navbar-expand-lg navbar navbar-light">
      <a class="navbar-brand" href="javascript:void(0)">
        <img :src='source' alt style="width: 50px;height:50px;" />
      </a>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav">
          <router-link to='/' tag="li" class="nav-item">
          <a class="nav-link">Machine System Track</a>
          </router-link>
          <router-link to='/sensorsDashboard' tag="li" class="nav-item">
          <a class="nav-link">Sensors Dashboard</a>
          </router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import source from '../../assets/logo.png'
export default {
  data(){
    return {
      source
    }
  }
};
</script>
<style>
.bg_lightBlue {
  background-color: #e3f2fd;
}
.navbar-nav {
  margin: 0 auto;
}
.navbar-nav li a{
  padding: 10px 16px !important;
  border-radius: 6px;
}
.navbar-nav li.router-link-exact-active a {
  background-color: #f47321;
  color: white !important;
}
</style>