import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'paho-mqtt'
import 'chart.js'
new Vue({
  el: '#app',
  render: h => h(App)
})