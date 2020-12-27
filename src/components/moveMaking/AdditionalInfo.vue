<template>
  <div class="fullWrapper">
    <h1>Write your additional move info.</h1>
    <div id="inputs">
      <div key="4" v-if="progress === 4">
        <h3>ADDITIONAL MOVE INFORMATION</h3>
        <label for="more">Addendum:</label>
        <input value="more" v-model="more">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AdditionalInfo',
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
