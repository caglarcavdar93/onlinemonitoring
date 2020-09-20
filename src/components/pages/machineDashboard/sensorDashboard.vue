<template>
  <div class="row">
    <div class="col-12">
      <p class="text-center font-weight-bold py-2">{{tagLabel}}</p>
    </div>
      <app-sensor-chart></app-sensor-chart>
  </div>
</template>

<script>
import SensorChart from './sensorsChart'
export default {
    components:{
        appSensorChart:SensorChart
    }
}
</script>

<style scoped>
.row {
  margin-top: 16px;
  padding: 5px;
  background-color: #efebe9;
  padding: 0;
  border: 1px solid #f9f9f9;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
}
</style>