<template>
  <div>
    <h1>{{ $t('title') }}</h1>
    <b-row v-if="!dataSubmitted">
      <b-col cols="12" v-if="step == 1">
        <p>
          <label for="participantsNum">{{ $t('enterPartNum') }}</label>
          <input type="number" min="1" id="participantsNum" name="participantsNum" v-model.number="participantsNum" >
        </p>
        <p><b-button @click="nextStep">{{ $t('continue') }}</b-button></p>
      </b-col>
      <b-col cols="12" v-if="step == 2">
        <p v-for="n in participantsNum">
          <label :for="'score_' + n">{{ $t('enterScore') }} {{ n }}</label>
          <input type="number" min="1" value="10" :id="'score_' + n" :name="'score_' + n" @change="changeScore($event.target.value, n)">
        </p>
        <p><b-button @click="submit">{{ $t('continue') }}</b-button></p>
      </b-col>
      <b-col cols="12" v-if="error != ''">
        <p>{{ error }}</p>
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col>
        <canvas id="myChart" width="400" height="400" role="img" :aria-label="$t('graphLabel')">
          <p>{{ $t('noSupport') }}</p>
        </canvas>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col>
        <p><b-button @click="reset">{{ $t('reset') }}</b-button></p>
      </b-col>
    </b-row>
  </div>
</template>

<script type="text/javascript">

  export default{
    components: {

    },
    data(){
      return{
        step: 1,
        error: "",

        participantsNum: 1,

        dataSubmitted: false,

        graphData: []
      }
    },

    watch: {
      step(newVal){
        if(newVal == 2){
          this.$nextTick(function(){
            for(var i = 1; i <= this.participantsNum; i++){
              this.changeScore(document.getElementById("score_" + i).value, i);
            }
          })
        }
      }
    },

    computed: {
      labels(){
        var labels = [];
        for(var i = 1; i <= this.participantsNum; i++){
          labels[i-1] = "Participant " + i;
        }

        return labels;
      }
    },

    methods:{
      nextStep(){
        this.step++;
      },
      reset(){
        this.participantsNum = 1;
        this.graphData = [];

        this.step = 1;
        this.dataSubmitted = false;
      },
      changeScore(score, n){
        score = Number(score);
        this.graphData[n-1] = score;
      },
      submit(){
        this.dataSubmitted = true;

        this.$nextTick(function(){
          var Chart = require('chart.js');

          var ctx = document.getElementById('myChart');
          var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: this.labels,
              datasets: [{
                  label: 'Score',
                  data: this.graphData,
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        });
      }
    },
    mounted(){

    },
  }

</script>

<style scoped lang="scss">



</style>

<i18n>

  {
    "en": {
      "title": "Create a graph",
      "enterPartNum": "Please enter the number of participants in the session",
      "enterScore": "Please enter the score of participant",
      "continue": "Continue",
      "reset": "Reset",
      "noSupport": "Unfortunately, your browser does not support this element.",
      "graphLabel": "Graphic showing the score of every participant in the session"
    },
    "fr": {
      "title": "Créer un graphique",
      "enterPartNum": "Veuillez entrer le nombre de participants dans la session",
      "enterScore": "Veuillez entrer le score du participant",
      "continue": "Continuer",
      "reset": "Réinitialiser",
      "noSupport": "Malheureusement, votre navigateur ne supporte pas cet élément.",
      "graphLabel": "Graphique montrant le score de chaque participant dans la session"
    }
  }

</i18n>
