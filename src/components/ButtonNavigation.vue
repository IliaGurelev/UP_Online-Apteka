<template>
    <a :href="props.link" class="button-basket"> 
        <slot></slot>
    </a>
</template>

<script setup>
const props = defineProps({
    link: {
        type: String,
        required: true,
    }
})
</script>

<style lang="scss" scoped>
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
</style>