<template>
  <header class="header">
    <a href="/" class="title" >Online-Аптека</a>
    <div class="header__wrap">
      <SearchInput />
      <ButtonNavigation link="/user" class="button-user"> 
          <UserIconVue class="button-user__icon" />
      </ButtonNavigation>
    </div>
  </header>
  <main>
    <CardLongList 
      class="cards-list"
      :products=basketMock
    />
    <OrderMenu class="order-menu" :count="countTovar" :price="priceTovar" />
  </main>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

import basketMock from '@/mock/Basket.js';

import UserIconVue from '@/components/icons/UserIcon.vue';
import ButtonNavigation from '@/components/ButtonNavigation.vue';
import CardLongList from '@/components/CardLongList.vue';
import SearchInput from '@/components/SearchInput.vue';

const countTovar = ref(basketMock.length);
const priceTovar = ref(basketMock.reduce((price, item) => {
  return price + item.price * item.count
}, 0));
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

.search {
    position: relative;
    max-width: 1400px;
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

main {
  padding: 0px 50px;
  margin: 0 auto;
}

.title {
  font-size: 80px;
  font-weight: bold;
  color: #485936;
  text-align: center;
}

.button-user {
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

.cards-list {
  margin-bottom: 150px;
}

.order-menu {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>