import Vue from 'vue';
import Vuex from 'vuex';

// store modules
import contato from './modules/contato';
import * as getters from './getters';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nome: 'Luiz',
    sobrenome: 'Cardoso'
  },
  getters,
  // getters: {
    // ...getters,
    // authGetters, // Ex
  // },
  modules: { contato }  
});