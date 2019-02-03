import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentValue: 10
  },
  mutations: {
    INCREMENT_COUNTER(state, step) {
      state.currentValue += step;
    },
    DECREMENT_COUNTER(state, step) {
      state.currentValue -= step;
    }
  },
  actions: {
    increment({ commit }, step) {
      commit("INCREMENT_COUNTER", step);
    },
    decrement({ commit }, step) {
      commit("DECREMENT_COUNTER", step);
    }
  }
});
