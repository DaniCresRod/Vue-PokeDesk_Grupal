<script setup>
    defineProps({
        cardId: {
            type: Number
        },
        cardClass: {
            type: String
        },
        cardName: {
            type: String
        },
        imgUrl: {
            type: String
        },
        typeA: {
            type: String
        },
        typeB: {
            type: String,
            default: ""
        }
    })
</script>


<template>
    <div :class="cardClass">
        <h3> {{ cardId }} </h3>
        <h2>{{ cardName }}</h2>
        <img :src="imgUrl">
        <p>{{ typeA }}</p>
        <p>{{ typeB }}</p>
    </div>
</template>


<style scoped>
    
</style>