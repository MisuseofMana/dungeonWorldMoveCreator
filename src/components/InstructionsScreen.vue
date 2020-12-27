<template>
  <div class="fullWrapper">
    <h1>Dungeon World Move Maker</h1> 
    <p v-if="currentPage === 'start'">Create custom moves or browse the library of community based content.</p>
    <p v-if="currentPage === 'moves'">Write your move trigger, and pick + or -</p>
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'DetailsScreen',
  props:['currentPage'],
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
