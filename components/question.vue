<template>
  <span class="pure-radiobutton">
    <fieldset tabindex="0" style="margin-bottom: 15px;">
      <legend><strong class="question" v-html="question.text" /></legend>
      <p v-html="$t('selectRight')" />
      <ol type="1">
        <li v-for="(item,index) in question.options" :key="index">
          <input :disabled="lock" @click="q1Submitted=false" type="radio" v-model="answer" :name="'q'+qId" :id="'radioq'+qId+index" :value="index"><label :for="'radioq'+qId+index" v-html="item" />
          </li>
      </ol>
      <b-button :disabled="q1Submitted || lock || !answer" @click="submitAnswer">{{ $t('submit') }}</b-button>
    </fieldset>
    <!--<p aria-live="polite" v-if="!Quest1 && q1Submitted" v-html="$t('pleaseAnswer')"></p>-->
    <p tabindex="0" aria-live="assertive" v-if="answer && q1Submitted" v-html="question.feedback[answer]" style="margin-bottom: 20px;" />
    <p tabindex="0" aria-live="assertive" v-if="answer && q1Submitted && question.conclusion" v-html="question.conclusion" style="margin-bottom: 20px;" />
  </span>
</template>

<script type="text/javascript">
  
  export default {
    data() {
      return {
        q1Submitted: false,
        answer: ""
      }
    },

    props: {
      forceEmpty:{ type:Boolean, default:false },
      lock:{ type:Boolean, default:false },
      question: {
        type: Object,
        default: function() {
          return {
            text: "Question",
            options: { "1": "Option" },
            feedback: { "1": "Feedback" },
            conclusion: ""
          }
        }
      },
      qId: {
        type: String,
        default: "0"
      }
    },
    methods: {
      submitAnswer() {
        this.q1Submitted = true
        if(this.answer != ""){
          this.$emit('response', this.Quest1);
        }
      }
    },
  }

</script>

<style scoped lang="scss">
  
  .question {
    margin-top: 1em;
    position: relative;
    display: inline-block;
    width: 100%;
  }
  
  .pure-radiobutton{
    input[type="checkbox"], input[type="radio"]{
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
      
      &:focus+label:before, &:hover + label:before {
        border-color: #4d4d4d;
        background-color: #f2f2f2;
        outline:blue solid 1px;
      }
      &:active + label:before{
        transition-duration: 0s;
      }
      & + label{
        position: relative;
        padding-left: 2em;
        vertical-align: middle;
        user-select: none;
        cursor: pointer;
      }
      & + label:before {
        box-sizing: content-box;
        content: '';
        color: #4d4d4d;
        position: absolute;
        top: 50%;
        left: 0;
        width: 14px;
        height: 14px;
        margin-top: -9px;
        border: 2px solid #4d4d4d;
        text-align: center;
        transition: all 0.4s ease;
        background-color: white;
      }
      & + label:after {
        box-sizing: content-box;
        content: '';
        background-color: #4d4d4d;
        position: absolute;
        top: 50%;
        left: 4px;
        width: 10px;
        height: 10px;
        margin-top: -5px;
        transform: scale(0);
        transform-origin: 50%;
        transition: transform 200ms ease-out;
      } 
      &:disabled + label:before {
        border-color: #cccccc;
      }
      &:disabled + label:before {
        border-color: #cccccc;
      }
      &:disabled:focus + label:before, &:disabled:hover + label:before {
        background-color: inherit;
      }
      &:disabled:checked + label:before {
        background-color: #cccccc;
      }
      
    }
    
    input[type="checkbox"]{
      & + label:after {
        background-color: transparent;
        top: 50%;
        left: 4px;
        width: 8px;
        height: 3px;
        margin-top: -4px;
        border-style: solid;
        border-color: #ffffff;
        border-width: 0 0 3px 3px;
        border-image: none;
        transform: rotate(-45deg) scale(0);
      }
      &:checked + label:after {
        content: '';
        transform: rotate(-45deg) scale(1);
        transition: transform 200ms ease-out;
      }
      &:checked + label:before{
        animation: borderscale 200ms ease-in;
        background: #4d4d4d;
      }

      &:checked + label:after{
        transform: rotate(-45deg) scale(1);
      }
    }
    
    input[type="radio"]{
      &:checked + label:before {
        animation: borderscale 300ms ease-in;
        background-color: white;
      }

      &:checked + label:after {
        transform: scale(1);
      }

      & + label:before, & + label:after {
        border-radius: 50%;
      }
    }
  }

  @keyframes borderscale {
    50% {
      box-shadow: 0 0 0 2px #4d4d4d;
    }
  }

</style>


<i18n>
  
  {
    "en":{
      "selectRight": "Select the correct answer.",
      "submit": "Submit"
    },
    "fr":{
      "selectRight": "Choisissez la bonne réponse&nbsp;:",
      "sibmit": "Soumettre"
    }
  }
  
</i18n>