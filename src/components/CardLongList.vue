<template>
    <ul class="products">
        <li v-for="product in props.products" :key="product.id">
            <CardLong 
                :imageLink=product.image
                :name=product.name
                :price=product.price
                :count=product.count
            />
        </li>
    </ul>
</template>

<script setup>
import CardLong from '@/components/CardLong.vue';

const props = defineProps({
    products: {
        type: Array,
        required: true,
    }
})
</script>

<style lang="scss" scoped>
.products {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
}
</style>