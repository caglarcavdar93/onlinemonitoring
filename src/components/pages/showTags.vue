<template>
  <div class="row">
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
  props:["topic"],
  data() {
    return {
      sensorName: "",
      tagValue: "",
      client: null,
    };
  },
  methods:{
      onConnect() {
      this.client.subscribe("iotgateway"+this.topic);
    },
    onMessageArrived(message) {
      if(message.DestinationName==this.topic){
          this.tagValue=message.payload["v"];
      }
    }
  },
  beforeMount() {
    this.client = new Paho.Client("localhost", 1883, "");
    this.client.OnMessageArrived = onMessageArrived;
    this.client.connect({ onSuccess: onConnect });
  },
};
</script>

<style>
</style>