<template>
  <b-row align-h="center">
    <b-col cols="6">
      <canvas id="myChart" width="400" height="300" role="img" :aria-label="$t('graphLabel')">
        <p>{{ $t('noSupport') }}</p>
      </canvas>
    </b-col>
  </b-row>
</template>

<script>

  export default {
    data () {
      return {
        chart: ""
      }
    },

    props:{
      graphData: { type: Array, default: function () { return [] } },
      questionNum: { type: Number, default: 15 }
    },

    methods: {
      render(){
        var that = this;
        this.$nextTick(function(){
          var Chart = require('chart.js');

          var ctx = document.getElementById('myChart');
          that.chart = new Chart(ctx, {
            type: 'scatter',
            data: {
              datasets: [{
                  label: 'Score',
                  data: this.graphData,
              }]
            },
            options: {
              scales: {
                xAxes: [{
                  type: 'linear',
                  position: 'bottom',
                  ticks: {
                    max: this.questionNum,
                    min: 0,
                    stepSize: 1
                  }
                }],
                yAxes: [{
                  ticks: {
                    max: 10,
                    min: -10,
                    stepSize: 1
                  }
                }]
              },
              legend:{
                display: false
              },
              elements:{
                point:{
                  radius: 5,
                  backgroundColor: 'rgba(255, 0, 0, 1)',
                  borderwidth: 0,
                  hitRadius: 3,
                  hoverRadius: 7,
                  hoverBorderWidth: 0
                }
              }
            }
          })
        });
      },
      update(){
        this.chart.update();
      }
    },

    mounted(){
      //this.render()

      console.log(this.graphData)
    }
  }

</script>

<style lang="scss">


</style>

<i18n>

  {
    "en": {
      "noSupport": "Unfortunately, your browser does not support this element.",
      "graphLabel": "Graphic showing the score of every participant in the session"
    },
    "fr": {
      "noSupport": "Malheureusement, votre navigateur ne supporte pas cet élément.",
      "graphLabel": "Graphique montrant le score de chaque participant dans la session"
    }
  }

</i18n>
