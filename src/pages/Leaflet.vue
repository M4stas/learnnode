<script setup>
import { ref } from 'vue';
import LeafletMap from './LeafletMap.vue';
let center = ref([59.42688, 24.74357])

let coords = ref([0, 0])

if ("geolocation" in navigator) {
    setInterval(() => {
        console.log('hello');
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude, position.coords.longitude);
            coords.value = [position.coords.latitude, position.coords.longitude]
        });
    }, 1000)

} else {
    console.log('hi');
}

</script>

<template>
    <button class="button is-primary" @click="center = [59.075828963860765, 24.181857792128405]">go to tussu</button>
    <button class="button is-primary" @click="center = [57.76146685181907, 26.623740149970054]">go to litsi</button>
    <LeafletMap :center="center" :zoom="18" :marker="coords"></LeafletMap>
</template>
<style></style>