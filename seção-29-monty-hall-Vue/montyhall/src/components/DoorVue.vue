<template>
  <div class="door-area">
    <div class="door-frame">
      <GiftVue v-if="open && hasGift" />
    </div>
    <div class="door">
      <div class="number">{{ number }}</div>
      <div class="knob"></div>
    </div>
  </div>
</template>

<script>
import GiftVue from "./GiftVue.vue";

export default {
  name: "DoorVue",
  components: {
    GiftVue,
  },
  props: {
    number: {},
    hasGift: { type: Boolean },
  },
  data: function () {
    return {
      open: false,
      selected: false,
    };
  },
};
</script>

<style>
:root {
  --door-border: 5px solid brown;
}

.door-area {
  position: rela;
}
</style>
