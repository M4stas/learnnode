<script setup>
import { ref } from 'vue';

let coords = ref({ lat: 0, lon: 0 })

if ("geolocation" in navigator) {
    console.log('hello');
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        coords.value.lat = position.coords.latitude
        coords.value.lon = position.coords.longitude
    });
} else {
    console.log('hi');
}
</script>

<template>
    <h1>Lat: {{ coords.lat }} Long: {{ coords.lon }}</h1>
</template>