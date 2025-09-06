<template>
  <div id="app">
    <h1>Calculator</h1>
    <CalculatorVue />
  </div>
</template>

<script>
import CalculatorVue from "./main/CalculatorVue.vue";

export default {
  components: { CalculatorVue },
};
</script>

<style>
@font-face {
  font-family: "RobotoMono";
  src: url("./fonts/RobotoMono-Thin.ttf");
}

* {
  font-family: "RobotoMono", monospace;
}

body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #fff;
  background-color: hsl(204, 5%, 15%);
}
</style>
