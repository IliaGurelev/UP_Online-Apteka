<template>
  <header class="header">
    <a href="/" class="title" >Online-Аптека</a>
    <div class="header__wrap">
      <SearchInput />
      <ButtonNavigation link="/basket" class="button-basket"> 
          <BasketIcon class="button-basket__icon" />
      </ButtonNavigation>
    </div>
  </header>
  <main>
    <div class="wrap">
      <UserIconVue class="user-icon" />
      <div class="wrap wrap--column">
        <label class="label" for="name">Имя</label>
        <input class="input" type="text" id="name">
        <label class="label" for="surname">Фамилия</label>
        <input class="input" type="text" id="surname">
        <label class="label" for="otchestvo">Отчество</label>
        <input class="input" type="text" id="otchestvo">
      </div>
    </div>
    <div class="wrap">
      <div class="wrap wrap--column">
        <label class="label" for="city">Город</label>
        <input class="input" type="text" id="city">
      </div>
      <div class="wrap wrap--column">
        <label class="label" for="street">Улица</label>
        <input class="input" type="text" id="street">
      </div>
    </div>
    <div class="wrap">
       <div class="wrap wrap--column">
        <label class="label" for="home">Дом/квартира</label>
        <input class="input" type="text" id="home">
      </div>
      <div class="wrap wrap--column">
        <label class="label" for="entrance">Подъезд</label>
        <input class="input" type="text" id="entrance">
      </div>
    </div>
  </main>
  <footer>
    <div class="wrap">
      <button class="button button--red">Выйти</button>
      <button class="button">Сохранить</button>
    </div>
  </footer>
</template>

<script setup>
import BasketIcon from '@/components/icons/BasketIcon.vue';
import SearchInput from '@/components/SearchInput.vue';
import UserIconVue from '@/components/icons/UserIcon.vue';
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

.wrap {
  display: flex;
  justify-content: center;
  column-gap: 80px;

  &--column {
    flex-direction: column;
  }
}

.user-icon {
  max-width: 340px;
  width: 100%;
}

.label {
  font-weight: bold;
  font-size: 30px;
  color: #9B9B9B;
}

.input {
  background-color: #c9c9c9;
  font-size: 35px;
  width: 650px;
  border-radius: 20px;
  padding: 10px;
}

.button {
  max-width: 330px;
  width: 100%;
  background-color: #93A368;
  color: #ffffff;
  border-radius: 60px;
  padding: 20px 80px;
  font-size: 35px;

  &--red {
    background-color: #a36868;
  }
}

main {
  margin-bottom: 60px;
}
</style>