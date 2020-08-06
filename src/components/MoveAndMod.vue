<template>
     <div>
        <h3>WRITE YOUR MOVE TRIGGER</h3>
        <textarea style="resize: none;" value="trigger" v-model="trigger"></textarea>

        <span class="radios">
        <h3> + PICK YOUR MODIFIER</h3>
        <label for="+">+</label>
        <input checked type="radio" class="radioButton" value="+" v-model="plusminus">
        </span>

        <span class="radios">
        <label for="-">-</label>
        <input type="radio" class="radioButton" value="-" v-model="plusminus">
        </span>

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
        <span class="toggle" 
        v-if="isCustom"
        @click="isCustom = !isCustom">
          PICK MOD FROM STATS
        </span>

        <span class="toggle" 
        v-else-if="!isCustom"
        @click="isCustom = !isCustom">
          MAKE CUSTOM MOD
        </span>
        </span>
        </div>

      </div>

</template>

<script>
    export default {
        name: 'MoveAndMod'
    }
</script>

<style scoped>

</style>