<template>
    <div class="card">
        <div class="card__image-wrap">
            <img class="card__image" :src="props.imageLink" alt="">
        </div>
        <div class="card__title">{{props.name}}</div>
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
        type: Number,
        required: true,
    }
})
</script>

<style lang="scss" scoped>
    .card {
        display: flex;
        flex-direction: column;
        padding: 20px 20px 16px 20px;
        background: #FCFBFC;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
        border-radius: 18px;
        max-width: 270px;
        width: 100%;  
        height: 370px;
        row-gap: 10px;
        cursor: pointer;

        &__image {
            width: 100%;
            height: auto;

            &-wrap {
                width: 230px;
            }
        }

        &__title {
            font-size: 18px;
            display: -webkit-box;           
            -webkit-line-clamp: 2;         
            -webkit-box-orient: vertical;   
            overflow: hidden;               
            text-overflow: ellipsis;        
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