<template>
  <div>
    <h2>{{ currentValue }}</h2>
    <div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {
    increment() {
      this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.dispatch("decrement");
    }
  },
  computed: {
    ...mapState(["currentValue"])
  }
};
</script>

<style scoped></style>
