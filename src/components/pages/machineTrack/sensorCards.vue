<template>
  <div class="wcol-md-6">
    <div class="card text-center">
      <div class="card-header">{{sensorName}}</div>
      <div class="card-body">
        <p class="card-text">{{tagValue}}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ["topicName"],
  data() {
    return {
      sensorName: "Sensor",
      tagValue: "0",
      client: null,
    };
  },
  methods: {
    onConnect() {
      this.client.subscribe("iotgateway/" + this.topicName);
    },
    onMessageArrived(message) {
      var data=JSON.parse(message.payloadString);
      this.tagValue=data.values[0].v;
    },
  },
  beforeMount() {
    this.sensorName= this.topicName.toUpperCase();
    this.client = new this.$Paho.Client("localhost", 9001,"");
    this.client.onMessageArrived=this.onMessageArrived;
    this.client.connect({cleanSession:true,onSuccess: this.onConnect });
  },
};
</script>

<style scoped>
</style>