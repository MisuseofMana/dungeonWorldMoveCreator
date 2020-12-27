<template>
    <div>
    <section id="theMove">
    <h1>When you <span :class="{'active': currentPage === 'moves'}">{{trigger}}</span>, roll <span :class="{'active': currentPage === 'moves'}">{{ plusminus }} </span>  
    <span :class="{'active': currentPage === 'stats'}"> {{stat}}</span>:</h1>
      <ul>
        <li>On a <span :class="{'active': currentPage === 'full'}">{{ fullNumber }}</span>, <span :class="{'active': currentPage === 'full'}">{{ fullSuccess }}</span></li> 
        <li>On a {{ mixedNumber }}, {{ mixedSuccess }}</li>
        <ul>
          <li v-for="items in more" :key='items'>{{ items }}</li>
        </ul>
      </ul>
    </section>  
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'TheMove',
    props:['currentPage'],
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
    created() {
        this.$store.dispatch('setupExample')
    }
}
</script>

<style scoped>
@keyframes attention {
  0%, 100% { transform: translate(0px, 0px) }
  33% { transform: translate(0px, -1px) }
  66% { transform: translate(0px, 1px) }
}

.active {
    color:rgb(9, 113, 136);
    display:inline-block;

    animation: attention 2s linear infinite;    
}
</style>