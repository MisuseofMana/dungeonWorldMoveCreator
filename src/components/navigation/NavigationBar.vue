<template>
    <div>
        <div>
          <p v-if="currentPage === 'start'" class="siteButton" @click="$emit('change-page', 'next')">GET STARTED</p>
        </div>

        <div v-if="currentPage !== 'start'">
          <div class="siteButton" @click="$emit('change-page', 'back')">BACK</div>
          <div class="siteButton" @click="$emit('change-page', 'next')">NEXT</div>
        </div>
        
        <div v-if="currentPage === 'review'">
          <div class="siteButton">FINISHED</div>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'NaviagtionBar',
    props:['currentPage'],

    }
</script>

<style scoped>

</style>