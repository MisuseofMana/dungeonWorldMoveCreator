<template>
  <div>
    <div class="flexCol">
      <select v-model="stat" v-if="!isCustom">
        <option disable value="">---</option>
        <option>STR</option>
        <option>DEX</option>
        <option>CON</option>
        <option>INT</option>
        <option>WIS</option>
        <option>CHA</option>
      </select>

      <span v-if="isCustom">
        <input value="CUSTOM" v-model="stat">
      </span>

      <span class="modifier">
			<span class="siteButton" 
			v-if="isCustom"
			@click="isCustom = !isCustom">
			PICK MOD FROM STATS
			</span>

			<span class="siteButton" 
			v-if="!isCustom"
			@click="isCustom = !isCustom">
			MAKE CUSTOM MOD
			</span>
      </span>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'RelevantStat',
        data() {
          return {
            isCustom: false
          }
        },
        computed:{
            stat:{
            get() {
                return this.$store.state.stat
            },
            set (value) {
                this.$store.commit('mutate', {property:'stat', with:value})
            }
          },
        }
    }
</script>

<style scoped>

</style>