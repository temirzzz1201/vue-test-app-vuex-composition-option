<template>
  <select v-model="localModelValue" @change="changeOption">
    <option disabled>Выберете из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
  computed: {
    localModelValue: {
      get() {
        return this.modelValue;
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
