<template>
  <div class="fullWrapper">
    <h1>DUNGEON WORLD CUSTOM MOVE MAKER</h1>
    <div id="inputs">
      <div key="3" v-if="progress === 3">
        <h3>DEFINE A MIXED SUCCESS</h3>
        <label for="mixedSuccess">Mixed Success:</label>
        <input value="mixedSuccess" v-model="mixedSuccess">
      </div> 
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MixedSuccess',
  data() {
    return {
      progress:1,
    }
  },
  computed: mapState([
      'trigger',
      'plusminus',
      'stat',
      'fullSuccess',
      'mixedSuccess',
      'more',
      'fullNumber',
      'mixedNumber',
      'randomMoves'
  ]),
  methods: {
    getRandom(max) {
      return Math.floor(Math.random() * max);
    }
  },
  created() {
  
    // let random = this.getRandom(this.randomMoves.length);
    // let randomMove = this.randomMoves[this.getRandom(random)]


    // this.trigger = randomMove.desc;
    // this.plusminus = randomMove.operator;
    // this.stat = randomMove.stat;
    // this.fullSuccess = randomMove.full;
    // this.mixedSuccess = randomMove.mixed;
    // this.more = randomMove.adden;

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
