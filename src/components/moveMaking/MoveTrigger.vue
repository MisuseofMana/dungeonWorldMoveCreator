<template>
  <div class="flexRow">
    <div class="module">
      <textarea style="resize: none;" value="trigger" v-model="trigger"></textarea>
    </div>

    <div class="module">
      <div class="flexRow">
        <div class="radios">
          <label for="+">+</label>
          <input checked type="radio" class="radioButton" value="+" v-model="plusminus">
        </div>

        <span class="radios">
          <label for="-">-</label>
          <input type="radio" class="radioButton" value="-" v-model="plusminus">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoveTrigger',
  computed:{
    trigger:{
        get() {
            return this.$store.state.trigger
        },
        set (value) {
            this.$store.commit('mutate', {property:'trigger', with:value})
        }
    },
    plusminus:{
        get() {
            return this.$store.state.plusminus
        },
        set (value) {
            this.$store.commit('mutate', {property:'plusminus', with:value})
        }
    },
  }
}
</script>

<style scoped>
  .module {
    margin:20px;
  }
  .radios {
    font-size:20px;
    font-weight:600;
  }
  
  .radioButton {
    margin:10px;
  }

  textarea {
    background:rgb(211, 211, 211);
    width:200px;
    height:40px;
    padding:10px;
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none; /*remove the resize handle on the bottom right*/
  }
</style>