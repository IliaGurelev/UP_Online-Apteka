<template>
  <header>
    <a href="/" class="title" >Online-Аптека</a>
    <ButtonNavigation link="/user" class="button-user"> 
        <UserIconVue class="button-user__icon" />
    </ButtonNavigation>
  </header>
  <main>
    <CardLongList 
      :products=basketMock
    />
  </main>
</template>

<script setup>
import basketMock from '@/mock/Basket.js';

import UserIconVue from '@/components/icons/UserIcon.vue';
import ButtonNavigation from '@/components/ButtonNavigation.vue';
import CardLongList from '@/components/CardLongList.vue';
</script>

<style lang="scss" scoped>
header{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-bottom: 30px;
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
</style>