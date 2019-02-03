<template>
  <div>
    <h2>{{ currentValue }}</h2>
    <div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <input type="number" v-model.number="step" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      step: 1
    };
  },
  methods: {
    increment() {
      this.$store.dispatch("increment", this.step);
    },
    decrement() {
      this.$store.dispatch("decrement", this.step);
    }
  },
  computed: {
    ...mapState(["currentValue"])
  }
};
</script>

<style scoped></style>
