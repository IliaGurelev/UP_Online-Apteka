<template>
    <div class="home-page">
        <header class=home-page__header>
            <h1 class="title" >Online-Аптека</h1>
            <div class="navigation">
                <div class="search">
                    <input class="search__input" type="text">
                    <button class="search__button">
                        <SearchIconVue class="search__button-icon" />
                    </button>
                </div>
                <ButtonNavigation link="/basket" class="button-basket"> 
                    <BasketIconVue class="button-basket__icon" />    
                </ButtonNavigation>
                <ButtonNavigation link="/user" class="button-user"> 
                    <UserIconVue class="button-user__icon" />
                </ButtonNavigation>
            </div>
        </header>
        <main>
            <CardList v-if="products.length > 0"
                :cards=products
            /> 
            <div v-else class="not-found">
                <p>Ничего не найдено</p>
            </div>
        </main>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

import CardList from '@/components/CardList.vue';
import SearchIconVue from '@/components/icons/SearchIcon.vue';
import BasketIconVue from '@/components/icons/BasketIcon.vue';
import UserIconVue from '@/components/icons/UserIcon.vue';
import ButtonNavigation from '@/components/ButtonNavigation.vue';

import cardsMock from '@/mock/Cards.js';


const products = ref([]);

async function fetchData() {
    try {
        const response = await axios.get('http://localhost:5000/api/product');
        products.value = response.data;
    } catch (error) {
        console.error('Ошибка получения данных:', error);
    }
}

onMounted(() => {
    fetchData();
});
</script>

<style lang="scss" scoped>
    .home-page {
        display: flex;
        flex-direction: column;
        padding: 10px 30px;
        row-gap: 30px;
    }

    .title {
        font-size: 80px;
        font-weight: bold;
        color: #485936;
        text-align: center;
    }

    .navigation {
        display: flex;
        column-gap: 10px;
    }

    .search {
        position: relative;
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
        cursor: pointer;

        &__icon {
            width: 29px;
        }
    }

    .button-user {
        display: flex;
        justify-content: center;
        background: #EFEFEF;
        border-radius: 50%;
        width: 59px;
        cursor: pointer;

        &__icon {
            width: 29px;
        }
    }

.not-found {
    width: 100%;
    text-align: center;
    color: #4e4e4e;
    font-size: 25px;
}
</style>