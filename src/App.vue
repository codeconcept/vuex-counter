<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to the Counter App" />
    <CcCounter />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import CcCounter from "./components/CcCounter.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    CcCounter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
