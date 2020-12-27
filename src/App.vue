<template>
  <div id="app">
    <InstructionsScreen :currentPage="step"/>
    
    <transition name="fade" mode="out-in">

      <MoveTrigger v-if="step === 'moves'"/>
      <RelevantStat v-if="step === 'stats'"/>
      <FullSuccess v-if="step === 'full'"/>
      <MixedSuccess v-if="step === 'mixed'"/>
      <AdditionalInfo v-if="step === 'additional'" />
      <FinalReview v-if="step === 'review'" />
    </transition>

    <TheMove :currentPage="step" />

    <NavigationBar @change-page="changeStep($event)" :currentPage="step"/>
  </div>
</template>

<script>
import InstructionsScreen from './components/InstructionsScreen.vue';
import NavigationBar from './components/navigation/NavigationBar.vue';

import MoveTrigger from './components/moveMaking/MoveTrigger.vue';
import RelevantStat from './components/moveMaking/RelevantStat.vue';
import FullSuccess from './components/moveMaking/FullSuccess.vue';
import MixedSuccess from './components/moveMaking/MixedSuccess.vue';
import AdditionalInfo from './components/moveMaking/AdditionalInfo.vue';
import FinalReview from './components/moveMaking/FinalReview.vue';

import TheMove from './components/moveMaking/TheMove.vue';

import './styles/globals.css';

export default {
  name: 'App',
  components: {
    InstructionsScreen,
    NavigationBar,
    MoveTrigger,
    RelevantStat,
    FullSuccess,
    MixedSuccess,
    AdditionalInfo,
    FinalReview,
    TheMove
  },
  data() {
    return {
      step: 'start',
      progression: [
        'start',
        'moves',
        'stats',
        'full',
        'mixed',
        'additional',
        'review'
      ]
    }
  },
  methods: {
    changeStep(event){
        if(event === 'next' && this.step !== 'review') {
          const currentStepIndex = this.progression.indexOf(this.step);
          this.step = this.progression[currentStepIndex + 1];
        }
        if(event === 'back' && this.step !== 'start') {
          const currentStepIndex = this.progression.indexOf(this.step);
          this.step = this.progression[currentStepIndex - 1];
        }
        if(event === 'finished') {
          return
        }
    }
  }
}
</script>

<style>

body {
  margin:0;
  padding:0;
}

#app {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  height:100vh;
  background:grey;
  width:100%;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
