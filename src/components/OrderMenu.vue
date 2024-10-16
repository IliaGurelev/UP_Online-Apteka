<template>
  <div class="order-menu">
    <p class="order-menu__count">{{ props.count }} шт.</p>
    <p class="order-menu__price">{{ props.price }} ₽</p>
    <button class="order-menu__button">Оформить доставку</button>
  </div>
</template>

<script setup>
const props = defineProps({
  count: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true,
  }
})
</script>

<style lang="scss" scoped>
.order-menu {
  display: flex;
  max-width: 1400px;
  width: 100%;
  color: #ffffff;
  background-color: #485936;
  padding: 20px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  justify-content: space-between;
  align-items: center;
  column-gap: 100px;
  font-weight: bold;
  
  &__count {
    padding: 15px;
    color: #485936;
    font-size: 40px;
    background-color: #EFEFEF;
    border-radius: 60px;
  }

  &__price {
    font-size: 60px;
    border-bottom: solid 5px #EFEFEF;
  }

  &__button {
    color: #485936;
    font-weight: bold ;
    font-size: 40px;
    background-color: #EFEFEF;
    padding: 10px;
    border-radius: 50px;
    animation: shake 5s ease-in-out 1s infinite;
  }
}

@keyframes shake {
  0% { transform: rotate(0deg); }
  5% { transform: rotate(-5deg); }
  10% { transform: rotate(5deg); }
  15% { transform: rotate(-5deg); }
  20% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}
</style>