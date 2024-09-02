<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style lang="scss">
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  background: none;
  border: 1px solid teal;
  cursor: pointer;
  align-self: flex-end;
}
</style>
