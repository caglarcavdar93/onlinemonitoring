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
    };
  },
  methods: {
    onConnect() {
      this.client.subscribe(this.subscribedTopic);
    },
    onMessageArrived(message) {
      
      /*
      var myCanvas = document.getElementById("myChart" + this.subscribedTopic);
      var ctx = myCanvas.getContext("2d");
      if (this.chart != null) {
        this.chart.destroy();
      }
      this.chart = new Chart(ctx, {
        // The type of chart we want to create
        type: "line",
        // The data for our dataset
        data: {
          labels: this.labelArr,
          datasets: [
            {
              label: this.chartLabel,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              fill: false,
              data: this.tagDataArr,
              yAxisID: "y-axis-1",
            },
          ],
        },

        // Configuration options go here
        options: {
          animation: {
            duration: 0, // general animation time
          },
          scales: {
            yAxes: [
              {
                type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                display: true,
                position: "left",
                id: "y-axis-1",
              },
            ],
            // grid line settings
            gridLines: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
        },
      });
      */
    },
  },
  beforeMount: function () {
    this.client = new this.$Paho.Client("localhost", 9001, "");
    this.client.onMessageArrived = this.onMessageArrived;
    this.client.connect({
      cleanSession: true,
      onSuccess: this.onConnect,
    });
  },
  beforeDestroy: function () {
    this.client.disconnect();
  },
};
</script>

<style>
</style>