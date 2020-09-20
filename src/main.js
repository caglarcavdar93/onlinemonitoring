import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router/router'
import store from './store/store'
import '../resp.css'
import Paho from 'paho-mqtt'

Vue.prototype.$Paho=Paho;
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app');

