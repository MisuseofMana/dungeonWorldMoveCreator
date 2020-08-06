<template>
  <div class="fullWrapper">
    <h1>DUNGEON WORLD CUSTOM MOVE MAKER</h1>
    <div id="inputs">
      <transition name="fade" mode="out-in">
      
      <move-and-mod key="1" v-if="progress === 1"/>

      <div key="2" v-else-if="progress === 2">
        <h3>DEFINE A FULL SUCCESS</h3>
        <label for="fullSuccess">Full Success:</label>
        <input value="fullSuccess" v-model="fullSuccess">
      </div>
      
      <div key="3" v-else-if="progress === 3">
        <h3>DEFINE A MIXED SUCCESS</h3>
        <label for="mixedSuccess">Mixed Success:</label>
        <input value="mixedSuccess" v-model="mixedSuccess">
      </div>

      <div key="4" v-else-if="progress === 4">
        <h3>ADDITIONAL MOVE INFORMATION</h3>
        <label for="more">Addendum:</label>
        <input value="more" v-model="more">
      </div>
      </transition>




        <div id="navigation">
      <transition name="fade" mode="out-in">
        <div key="n1" v-if="progress === 1">
          <p @click="progress++">NEXT</p>
        </div>

        <div :key="'n' + progress" v-else-if="progress > 1 && progress < 4">
          <p @click="progress--">BACK</p>
          <p @click="progress++">NEXT</p>
        </div>
        
        <div key="n4" v-else-if="progress === 4">
          <p @click="progress--">BACK</p>
          <p @click="capture()">FINISHED</p>
        </div>
      </transition>
        </div>
    </div>


    <section id="theMove">
    <h1>When you {{ trigger }}, roll {{ plusminus }} {{stat}}:</h1>
      <ul>
        <li>On a {{ fullNumber }}, {{ fullSuccess }}</li> 
        <li>On a {{ mixedNumber }}, {{ mixedSuccess }}</li>
        <ul>
          <li v-for="items in more" :key='items'>{{ items }}</li>
        </ul>
      </ul>
    </section>
  </div>
</template>

<script>
import MoveAndMod from './MoveAndMod'

export default {
  name: 'MainScreen',
  components: [
    MoveAndMod,
  ],
  data() {
    return {
      progress:1,
      randomMoves: [
        { 
          desc:'find evidence of the missing prince',
          operator: '+',
          stat:'WIS',
          full: `Choose two.`,
          mixed: 'Choose one.',
          adden: [`He's unharmed.`, `You're undicovered by his captors.`]
        },
        { 
          desc:'inhale the fumes of a long dead myconid',
          operator: '+',
          stat:'CON',
          full: `You stave off the effects of hallucination.`,
          mixed: 'You begin to see halucinations, the GM will describe them.',
          adden: [],
        },
        { 
          desc:'are brought back from the forgotten realm',
          operator: '-',
          stat:'past trips to the forgotten realm',
          full: `Nothing happens, you seem to be normal.`,
          mixed: 'Choose an effect from the list below. The effect lasts until cured by a reliquary bishop',
          adden: [`You've forgotten how to see.`, `You've forgotten an advanced move.`, `You've forgotten your fears.`],
        }
      ],

      trigger: '',
      plusminus: '+/-',
      stat: 'MODIFIER',
      fullSuccess: '',
      mixedSuccess: '',
      more: [],
      fullNumber: '10+',
      mixedNumber: '7-9',
      isCustom: false,
    }
  },
  computed: {

  },
  methods: {
    getRandom(max) {
      return Math.floor(Math.random() * max);
    }
  },
  created() {
    let random = this.getRandom(this.randomMoves.length);
    let randMove = this.randomMoves[this.getRandom(random)]

    this.trigger = randMove.desc;
    this.plusminus = randMove.operator;
    this.stat = randMove.stat;
    this.fullSuccess = randMove.full;
    this.mixedSuccess = randMove.mixed;
    this.more = randMove.adden;

  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
