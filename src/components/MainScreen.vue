<template>
  <div class="fullWrapper">
    <h1>DUNGEON WORLD CUSTOM MOVE HELPER</h1>
    <div id="inputs">
      <transition name="fade" mode="out-in">
      <div key="1" v-if="progress === 1">
        <h3>WRITE YOUR MOVE TRIGGER AND CHOOSE YOUR MODIFIERS</h3>
        <input value="trigger" v-model="trigger">

        <span class="radios">
        <label for="+">+</label>
        <input type="radio" class="radioButton" value="+" v-model="plusminus">
        </span>

        <span class="radios">
        <label for="-">-</label>
        <input type="radio" class="radioButton" value="-" v-model="plusminus">
        </span>

        <select v-model="stat">
          <option disable value="">---</option>
          <option>STR</option>
          <option>DEX</option>
          <option>CON</option>
          <option>INT</option>
          <option>WIS</option>
          <option>CHA</option>
        </select>

        <p>Or Custom Mod</p>
        <input value="CUSTOM" v-model="stat">
      </div>

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
      <ul>
        <li>On a 10+, {{ fullSuccess }}</li> 
        <li>On a 7-9, {{ mixedSuccess }}</li>
        
      </ul>
      <li>{{ more }}</li>
    </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MainScreen',
  data() {
    return {
      progress:1,
      trigger: 'do something',
      plusminus: '+/-',
      stat: 'MODIFIER',
      fullSuccess: '',
      mixedSuccess: '',
      more: '',
    }
  },
  methods: {
    capture() {
      window.open('', document.getElementById('theMove').toDataURL());
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fullWrapper {
  color:black;
}

ul {
  text-align:left;
}

#inputs p {
  display:inline;
  margin-left:10px;
}

#inputs {
  display:flex;
  justify-content:center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  width:800px;
}

#inputs div {
  margin:10px;
}

#inputs input {
  margin:0 10px;
  padding:5px;
}

#inputs select {
  margin:0 0px;
  padding:5px;
}

.radios {
  font-size:20px;
  font-weight:600;
  
}

.radioButton {
  margin:10px;
}

section {
  background:lightgray;
  padding:10px;
  width:800px;
}

#navigation p {
  background:rgb(46, 48, 51);
  padding:10px;
  font-weight:600;
  color:white;
  display:inline;
}
#navigation p:hover {
  background:rgb(74, 92, 94);
  cursor:pointer;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
