<template>
  <div class="search">
    <input placeholder="Поиск товаров..." v-model="searchQuery" class="search__input" type="text">
    <button class="search__button">
      <SearchIconVue class="search__button-icon" />
    </button>
  </div>
</template>

<script setup>
import SearchIconVue from '@/components/icons/SearchIcon.vue';
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  width: 100%;
  display: flex;
  background-color: #cfcfcf;
  border-radius: 40px;
  font-size: 24px;
  padding: 15px 25px;

  &__input {
    width: 100%;
  }

  &__button {
    position: absolute;
    right: 0;
    top: 0;
    width: 59px;
    height: 100%;
    background-color: #93A368;
    border-radius: 50%;

    &-icon {
      width: 29px;
      height: 100%;
    }
  }
}
</style>