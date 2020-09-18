<template>
  <b-row>
    <b-col>
      <h1>Title</h1>

      <transition name="fade" mode="out-in">
        <div key="q1" v-if="questionAt == 1">
          <question :question="$t('questions.q1')" qId="1" @response="questionAnswered" @continue="nextQuestion" />
        </div>
        <div key="q2" v-if="questionAt == 2">
          <question :question="$t('questions.q2')" qId="2" @response="questionAnswered" @continue="nextQuestion" />
        </div>
        <div key="q3" v-if="questionAt == 3">
          <question :question="$t('questions.q3')" qId="3" @response="questionAnswered" :showContinue="false" />
        </div>
      </transition>

      <hr style="margin-top: 70px;" />
      <b-row>
        <b-col>
          <p><b-button @click="reset">{{ $t('startOver') }}</b-button></p>
        </b-col>
      </b-row>

    </b-col>
  </b-row>
</template>

<script type="text/javascript">
  
  //import { getArticleSummaries } from "@/assets/js/flatFileDb";
  import question from "~/components/question";
  
  export default{
    components: {
      question
    },
    data(){
      return{
        //articleSummaries: [],
        questionAt: 1
      }
    },
    
    //for DB
    /*async asyncData () {
      const articleSummaries = await getArticleSummaries();
      return { articleSummaries }
    },
    async created () {
      this.articleSummaries = await getArticleSummaries();
    },*/
    
    methods:{
      questionAnswered(){
        console.log("Question answered");
      },
      nextQuestion(){
        this.questionAt++;
      },
      reset(){
        this.questionAt = 1;
      }
    },
  }
  
</script>

<style scoped lang="scss">
  
  

</style>

<i18n>

  {
    "en": {
      "startOver": "Start Over",
      "questions": {
        "q1": {
          "text": "Is this a question?",
          "options": {
            "1": "Yes",
            "2": "No",
            "3": "Maybe",
            "4": "I don't know"
          },
          "feedback": {
            "1": "Correct! Feedback for option 1.",
            "2": "Incorrect. Feedback for option 2.",
            "3": "Incorrect. Feedback for option 3.",
            "4": "Incorrect. Feedback for option 4."
          }
        },
        "q2": {
          "text": "What about this?",
          "options": {
            "1": "Yes",
            "2": "No",
            "3": "Maybe",
            "4": "I don't know"
          },
          "feedback": {
            "1": "Correct! Feedback for option 1.",
            "2": "Incorrect. Feedback for option 2.",
            "3": "Incorrect. Feedback for option 3.",
            "4": "Incorrect. Feedback for option 4."
          }
        },
        "q3": {
          "text": "One last time. What about this?",
          "options": {
            "1": "Yes",
            "2": "No",
            "3": "Maybe",
            "4": "I don't know"
          },
          "feedback": {
            "1": "Correct! Feedback for option 1.",
            "2": "Incorrect. Feedback for option 2.",
            "3": "Incorrect. Feedback for option 3.",
            "4": "Incorrect. Feedback for option 4."
          }
        }
      }
    },
    "fr": {
      "startOver": "Recommencer",
      "questions": {
        "q1": {
          "text": "Est-ce une question?",
          "options": {
            "1": "Oui",
            "2": "Non",
            "3": "Peut-être",
            "4": "Je ne sais pas"
          },
          "feedback": {
            "1": "Bonne réponse! Rétroaction pour l'option 1.",
            "2": "Mauvaise réponse. Rétroaction pour l'option 2.",
            "3": "Mauvaise réponse. Rétroaction pour l'option 3.",
            "4": "Mauvaise réponse. Rétroaction pour l'option 4."
          }
        },
        "q2": {
          "text": "Et ça?",
          "options": {
            "1": "Oui",
            "2": "Non",
            "3": "Peut-être",
            "4": "Je ne sais pas"
          },
          "feedback": {
            "1": "Bonne réponse! Rétroaction pour l'option 1.",
            "2": "Mauvaise réponse. Rétroaction pour l'option 2.",
            "3": "Mauvaise réponse. Rétroaction pour l'option 3.",
            "4": "Mauvaise réponse. Rétroaction pour l'option 4."
          }
        },
        "q3": {
          "text": "Un dernière fois. Ça?",
          "options": {
            "1": "Oui",
            "2": "Non",
            "3": "Peut-être",
            "4": "Je ne sais pas"
          },
          "feedback": {
            "1": "Bonne réponse! Rétroaction pour l'option 1.",
            "2": "Mauvaise réponse. Rétroaction pour l'option 2.",
            "3": "Mauvaise réponse. Rétroaction pour l'option 3.",
            "4": "Mauvaise réponse. Rétroaction pour l'option 4."
          }
        }
      }
    }
  }

</i18n>
