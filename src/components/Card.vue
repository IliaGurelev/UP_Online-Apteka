<template>
    <div class="card">
        <div class="card__image-wrap">
            <img class="card__image" :src="props.imageLink" alt="">
        </div>
        <h2 class="card__title">{{props.name}}</h2>
        <button class="card__price">{{price}}₽</button>
    </div>
</template>

<script setup>
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
        type: String,
        required: true,
    }
})
</script>

<style lang="scss" scoped>
    .card {
        display: flex;
        flex-direction: column;
        padding: 6px 20px 16px 20px;
        background: #FCFBFC;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
        border-radius: 18px;
        max-width: 270px;
        width: 100%;  
        height: 370px;

        &__image {
            width: 100%;
            height: auto;

            &-wrap {
                width: 230px;
            }
        }

        &__title {
            font-size: 18px;
        }

        &__price {
            font-size: 20px;
            margin-top: auto;
            padding: 5px 6px;
            border-radius: 15px;
            text-align: center;
            color: #FCFBFC;
            background: #485936;
            transition: all 0.3s;

            &:hover {  
                background: #3c4b2c;
            }
        }
    }
</style>