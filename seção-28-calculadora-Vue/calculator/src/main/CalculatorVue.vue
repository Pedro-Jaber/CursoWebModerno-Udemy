<template>
  <div class="calculator">
    <DisplayVue :value="displayValue" />
    <ButtonVue label="AC" triple @onClick="clearMemory" />
    <ButtonVue label="÷" value="/" operation @onClick="setOperation" />
    <ButtonVue label="7" @onClick="addNumber" />
    <ButtonVue label="8" @onClick="addNumber" />
    <ButtonVue label="9" @onClick="addNumber" />
    <ButtonVue label="×" value="*" operation @onClick="setOperation" />
    <ButtonVue label="4" @onClick="addNumber" />
    <ButtonVue label="5" @onClick="addNumber" />
    <ButtonVue label="6" @onClick="addNumber" />
    <ButtonVue label="-" operation @onClick="setOperation" />
    <ButtonVue label="1" @onClick="addNumber" />
    <ButtonVue label="2" @onClick="addNumber" />
    <ButtonVue label="3" @onClick="addNumber" />
    <ButtonVue label="+" operation @onClick="setOperation" />
    <ButtonVue label="0" double @onClick="addNumber" />
    <ButtonVue label="." @onClick="addNumber" />
    <ButtonVue label="=" operation @onClick="setOperation" />
  </div>
</template>

<script>
import DisplayVue from "../components/DisplayVue.vue";
import ButtonVue from "../components/ButtonVue.vue";

export default {
  data: function () {
    return {
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0,
    };
  },
  components: { ButtonVue, DisplayVue },
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data());
    },
    setOperation(operation) {
      console.log("setOperation: ", operation);
      if (this.current === 0) {
        this.operation = operation;
        this.current = 1;
        this.clearDisplay = true;
      } else {
        const equals = operation === "=";
        const currentOperation = this.operation;

        try {
          this.values[0] = eval(
            `${this.values[0]} ${currentOperation} ${this.values[1]}`
          );
        } catch (e) {
          this.$emit("onError", e);
        }

        this.values[1] = 0;

        this.displayValue = this.values[0];
        this.operation = equals ? null : operation;
        this.current = equals ? 0 : 1;
        this.clearDisplay = !equals;
      }
    },
    addNumber(number) {
      console.log("addNumber: ", number);
      if (number === "." && this.displayValue.includes(".")) {
        return;
      }

      const clearDisplay = this.displayValue === "0" || this.clearDisplay;
      const currentValue = clearDisplay ? "" : this.displayValue;
      const displayValue = currentValue + number;

      this.displayValue = displayValue;
      this.clearDisplay = false;

      if (number !== ".") {
        const i = this.current;
        const newValue = parseFloat(displayValue);
        this.values[i] = newValue;
      }
    },
  },
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
