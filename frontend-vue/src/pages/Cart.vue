<template>
    <h1>This is the cart page</h1>
    <main v-if="sortedItems.length > 0">
        <div v-for="item in sortedItems" :key="item.id" class="item">
            <h2>{{ item.title }}</h2>
            <button @click="removeItems(item.id)">Remove</button>
        </div>
    </main>
    <main v-else>
        <h2>There is nothing in your cart</h2>
    </main>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
import { storeToRefs } from 'pinia'

const store = useCartStore()
const { removeItems, sortedItems } = store
const { cartItems } = storeToRefs(store)

</script>
