<template>
  <div id="app">
    <h1>Problema de Monty Hall</h1>
    <DoorVue number="1" :hasGift="false" />
  </div>
</template>

<script>
import DoorVue from "./components/DoorVue.vue";

export default {
  name: "App",
  components: {
    DoorVue,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  color: hwb(27 95% 0%);
  background-color: hsl(220, 6%, 15%);
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1 {
  border: 1px solid #000;
  background-color: #0004;
  padding: 20px;
  margin-bottom: 3rem;
}
</style>
