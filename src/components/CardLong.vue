<template>
    <div class="card">
        <div class="card__image-wrap">
            <img class="card__image" :src="props.imageLink" alt="">
        </div>
        <div class="card__info">
            <h2 class="card__title">{{props.name}}</h2>
            <div class="card__to-buy">
                <DeleteIcon class="card__delete" />
                <p class="card__count">{{count}} шт.</p>
                <p class="card__price">{{price * count}} ₽</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import DeleteIcon from '@/components/icons/DeleteIcon.vue';

const props = defineProps({
    imageLink: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    }
})
</script>

<style lang="scss" scoped>
  .card {
      display: flex;
      padding: 10px;
      background: #FCFBFC;
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
      border-radius: 18px;
      max-width: 1100px;
      width: 100%;  
      height: 200px;

      &__image {
        width: 100%;
        height: auto;
        border-radius: 15px;

        &-wrap {
          width: 210px;
        }
      }

      &__info {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      &__title {
        font-size: 38px;
        font-weight: bold;
        width: 100%;
      }

      &__to-buy {
        display: flex;
        margin-left: auto;
        margin-top: auto;
        column-gap: 10px;
      }

      &__delete {
        width: 30px;
        fill: #9B2424;
        cursor: pointer;
      }

      &__count {
        font-size: 20px;
        font-weight: bold;
        width: 100px;
        padding: 10px 6px;
        border-radius: 25px;
        text-align: center;
        color: #FCFBFC;
        background: #93A368;
        transition: all 0.3s;
        cursor: pointer;

        &:hover {  
          background: #93A368;
        }
      }

      &__price {
        font-size: 20px;
        font-weight: bold;
        width: 250px;
        padding: 10px 6px;
        border-radius: 25px;
        text-align: center;
        color: #FCFBFC;
        background: #93A368;
        transition: all 0.3s;
        cursor: pointer;

        &:hover {  
          background: #93A368;
        }
      }
    }
</style>