<template>
  <div class="row">
    <canvas :id="'myChart'+this.subscribedTopic"></canvas>
  </div>
</template>

<script>
export default {
  props: ["subscribedTopic"],
  data() {
    return {
      labelArr: [],
      tagDataArr: [],
      chartLabel: "",
      chart: null,
      client: null,
      chartConfig: {
        // The type of chart we want to create
        type: "line",
        // The data for our dataset
        data: {
          labels: this.labelArr,
          datasets: [
            {
              label: this.subscribedTopic.toUpperCase(),
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              fill: false,
              data: this.tagDataArr,
            },
          ],
        },

        // Configuration options go here
        options: {
          animation: {
            duration: 0, // general animation time
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  display: false, //this will remove only the label
                },
              },
            ],
          },
          // grid line settings
          gridLines: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      },
    };
  },
  methods: {
    onConnect() {
      this.client.subscribe("iotgateway/" + this.subscribedTopic);
    },
    onMessageArrived(message) {
      try {
        var data = JSON.parse(message.payloadString);
        if (this.tagDataArr.length < 30) {
          this.tagDataArr.push(data.values[0].v);
          var dateTime = new Date(data.values[0].t).toISOString();
          this.labelArr.push(dateTime);
        }
        this.chart.data.datasets[0].data = this.tagDataArr;
        this.chart.data.labels = this.labelArr;
        this.chart.update();
        if (this.tagDataArr.length == 30) {
          this.tagDataArr.shift();
          this.labelArr.shift();
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted: function () {
    this.client = new this.$Paho.Client("localhost", 9001, "");
    this.client.onMessageArrived = this.onMessageArrived;
    this.client.connect({
      cleanSession: true,
      onSuccess: this.onConnect,
    });
    var myCanvas = document.getElementById("myChart" + this.subscribedTopic);
    var ctx = myCanvas.getContext("2d");
    this.chart = new Chart(ctx, this.chartConfig);
  },
  beforeDestroy: function () {
    this.client.disconnect();
  },
};
</script>

<style>
</style>