<template>
  <div class="container">
    <h3>Machine1</h3>
    <hr />
    <div class="row">
      <app-sensor-card v-for="(topic, index) in this.$store.state.topics" :topicName="topic" :key="index"></app-sensor-card>
    </div>
  </div>
</template>

<script>
import sensorCard from "./sensorCards";
export default {
  components: {
    appSensorCard: sensorCard,
  },
  data() {
    return {
      //topics:
    };
  }
};
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