<template>
  <div class="calculator">
    <DisplayVue></DisplayVue>
    <ButtonVue></ButtonVue>
  </div>
</template>

<script>
import DisplayVue from "../components/DisplayVue.vue";
import ButtonVue from "../components/ButtonVue.vue";

export default {
  components: { ButtonVue, DisplayVue },
};
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;

  background-color: hsl(26, 20%, 17%);

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr repeat(5, 3rem);
}
</style>
