import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentValue: 10
  },
  mutations: {
    INCREMENT_COUNTER(state) {
      state.currentValue += 1;
    },
    DECREMENT_COUNTER(state) {
      state.currentValue -= 1;
    }
  },
  actions: {
    increment(context) {
      context.commit("INCREMENT_COUNTER");
    },
    decrement(context) {
      context.commit("DECREMENT_COUNTER");
    }
  }
});
