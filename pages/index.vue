<template>
  <b-row>
    <b-col>
      <h1>{{ articleSummaries }}</h1>
      <p>{{ $t('something') }}</p>
    
      <question :question="$t('questions.q1')" qId="0" @response="questionAnswered" />
    </b-col>
  </b-row>
</template>

<script type="text/javascript">
  
  import { getArticleSummaries } from "@/assets/js/flatFileDb";
  import question from "~/components/question";
  
  export default{
    components: {
      question
    },
    data(){
      return{
        articleSummaries: []
      }
    },
    
    //for DB
    async asyncData () {
      const articleSummaries = await getArticleSummaries();
      return { articleSummaries }
    },
    async created () {
      this.articleSummaries = await getArticleSummaries();
    },
    
    methods:{
      questionAnswered(){
        console.log("qestion answered");
      },
    },
  }
  
</script>

<style scoped lang="scss">
  
  

</style>

<i18n>

  {
    "en": {
      "something": "Something",
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
        }
      }
    },
    "fr": {
      "something": "Quelque chose",
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
        }
      }
    }
  }

</i18n>