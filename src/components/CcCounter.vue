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
    currentValue() {
      return this.$store.state.currentValue;
    }
  }
};
</script>

<style scoped></style>
