<template>
  <header class="header">
    <a href="/" class="title" >Online-Аптека</a>
  </header>
  <main>
    <form @submit.prevent="() => submitForm(email, password)" action="" class="sign-in">
      <h2 class="sign-in__title">Вход</h2>
      <p>{{messageLogin}}</p>
      <div class="sign-in__wrap">
        <label class="sign-in__label" for="email">Почта</label>
        <input class="sign-in__input" type="text" id="email" name="email" v-model="email">
      </div>
      <div class="sign-in__wrap">
        <label class="sign-in__label" for="password">Пароль</label>
        <input class="sign-in__input" type="password" id="password" name="password" v-model="password">
      </div>
      <button class="sign-in__button">Войти</button>
    </form>
    <BlobsIcon class="blobs" />
  </main>
</template>

<script setup>
import { loginUser } from '@/apiService';
import { ref } from 'vue';

import BlobsIcon from '@/components/icons/BlobsIcon.vue';
import router from '@/router/index.js';

const email = ref('');
const password = ref('');
const messageLogin = ref('');
const response = ref('');

async function submitForm(email, password) {
  response.value = await loginUser(email, password);
  if(response.value == true) {
    router.push('/user');
  }
  else {
    messageLogin.value = response.value;
  }
} 
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

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
}

.sign-in {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  max-width: 600px;
  row-gap: 20px;
  padding: 20px;
  background: #F2F1F1;
  border-radius: 15px;
  
  &__title {
    text-align: center;
    font-size: 50px;
    color: #485936;
    font-weight: bold;
  }

  &__wrap {
    display: flex;
    flex-direction: column;
    row-gap: 3px;
  }

  &__input {
    background-color: #c7c7c7;
    font-size: 30px;
    padding: 8px;
    border-radius: 10px;
  }

  &__button {
    color: #EAEAEA;
    padding: 20px;
    background-color: #485936;
    border-radius: 8px;
  }
}

.blobs {
  position: absolute;
  width: 1000px;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}
</style>