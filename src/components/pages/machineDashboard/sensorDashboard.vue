<template>
 <div class="container">
    <h3>Machine1</h3>
    <hr />
    <div class="row">
      <app-sensor-chart v-for="(topic, index) in this.$store.state.topics" :subscribedTopic="topic" :key="'sensorChart'+index"></app-sensor-chart>
    </div>
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
div.container {
  margin-top: 30px;
  padding: 20px 40px;
  background-color: lightgoldenrodyellow;
  border: 1px solid #666;

  width: 100%;
}
div.row {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>