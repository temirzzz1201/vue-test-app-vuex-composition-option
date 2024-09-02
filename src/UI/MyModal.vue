<template>
  <div @click="hideModal" class="modal" v-if="show">
    <div @click.stop class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "my-modal",
  mixins: [toggleMixin],
  // props: {
  //   show: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  // methods: {
  //   hideModal() {
  //     this.$emit("update:show", false);
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);

  &__content {
    margin: auto;
    padding: 20px;
    background: #fff;
    border-radius: 12px;
  }
}
</style>
