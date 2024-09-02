<template>
  <div class="page__wrapper">
    <div
      :key="pageNumber"
      v-for="pageNumber in totalPages"
      class="page"
      :class="{
        'current-page': page === pageNumber,
      }"
      @click="$emit('changePage', pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  data() {},
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid teal;
  color: teal;
  border-radius: 5px;
  padding: 10px;
  margin-right: 2px;
  cursor: pointer;
}
.current-page {
  border: 3px solid teal;
  font-weight: 700;
}
</style>
