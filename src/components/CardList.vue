<template>
    <ul class="cards">
        <li class="cards__item" v-for="card in cards" :key="card.id">
            <Card 
                :imageLink=card.image
                :name=card.name
                :price=card.price
            />
        </li>
    </ul>
</template>

<script setup>
import Card from "@/components/Card.vue";

const props = defineProps({
    cards: {
        type: Array,
        required: true,
    }
})
</script>

<style lang="scss" scoped>
.cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
}
</style>