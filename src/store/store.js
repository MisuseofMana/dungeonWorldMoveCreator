import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        randomMoves: [
            { 
            trigger:'find evidence of the missing prince',
            operator: '+',
            stat:'WIS',
            full: `Choose two.`,
            mixed: 'Choose one.',
            adden: [`He's unharmed.`, `You're undicovered by his captors.`]
            },
            { 
            trigger:'inhale the fumes of a long dead myconid',
            operator: '+',
            stat:'CON',
            full: `You stave off the effects of hallucination.`,
            mixed: 'You begin to see halucinations, the GM will describe them.',
            adden: [],
            },
            { 
            trigger:'are brought back from the forgotten realm',
            operator: '-',
            stat:`times you've been trapped there`,
            full: `Nothing happens, you seem to be normal.`,
            mixed: 'Choose an effect from the list below. The effect lasts until cured by a reliquary bishop',
            adden: [`You've forgotten how to see.`, `You've forgotten an advanced move.`, `You've forgotten your fears.`],
            }
        ],
        trigger: '',
        plusminus: '+/-',
        stat: 'MODIFIER',
        fullSuccess: '',
        mixedSuccess: '',
        more: [],
        fullNumber: '10+',
        mixedNumber: '7-9',
    },
    mutations: {
        mutate(state, payload){
           state[payload.property] = payload.with;
        }
    },
    actions:{
        setupExample({state, commit}) {
            const random = Math.floor(Math.random() * state.randomMoves.length);
            const randomMove = state.randomMoves[random];
            commit('mutate', {property: 'trigger', with:randomMove.trigger});
            commit('mutate', {property: 'plusminus', with:randomMove.operator});
            commit('mutate', {property: 'stat', with:randomMove.stat});
            commit('mutate', {property: 'fullSuccess', with:randomMove.full});
            commit('mutate', {property: 'mixedSuccess', with:randomMove.mixed});
            commit('mutate', {property: 'more', with:randomMove.adden});
        }
    },
    getters: {

    },
  })