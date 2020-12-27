<template>
  <div>
      <p>Define a full success.</p>
      <input value="fullSuccess" v-model="fullSuccess">
  </div>
</template>

<script>
    export default {
        name: 'FullSuccess',
        computed: {
        fullSuccess:{
          get() {
              return this.$store.state.fullSuccess
          },
          set (value) {
              this.$store.commit('mutate', {property:'trigger', with:value})
          }
      },
    }
    }
</script>

<style scoped>

</style>