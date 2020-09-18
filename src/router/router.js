import Vue from 'vue';
import VueRouter from 'vue-router';
import sensors from '../components/pages/machineTrack/machineTrack.vue'
import dashBoard from '../components/pages/machineDashboard/sensorsDashboard'
Vue.use(VueRouter);

const routes = [{
    path:'/',
    component:sensors
},{
    path:'sensorsDashboard',
    component:dashBoard
},{
    path:'*',
    redirect:'/'
}]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router