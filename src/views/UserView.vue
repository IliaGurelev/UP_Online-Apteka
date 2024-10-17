<template>
  <header class="header">
    <a href="/" class="title" >Online-Аптека</a>
    <div class="header__wrap">
      <div class="search">
        <input class="search__input" type="text">
        <button class="search__button">
          <SearchIcon class="search__button-icon" />
        </button>
      </div>
      <ButtonNavigation link="/basket" class="button-basket"> 
          <BasketIcon class="button-basket__icon" />
      </ButtonNavigation>
    </div>
  </header>
</template>

<script setup>
import BasketIcon from '@/components/icons/BasketIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  &__wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1400px;
    width: 100%;
    gap: 15px;
  }
}

.title {
  font-size: 80px;
  font-weight: bold;
  color: #485936;
  text-align: center;
}

.search {
  position: relative;
  max-width: 1400px;
  width: 100%;
  display: flex;
  background-color: #EFEFEF;
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

.button-basket {
  display: flex;
  justify-content: center;
  background: #EFEFEF;
  border-radius: 50%;
  width: 59px;
  height: 59px;
  cursor: pointer;

  &__icon {
    width: 29px;
  }
}
</style>