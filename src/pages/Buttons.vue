<script setup>
import { ref } from 'vue';
import Button from '../components/Button.vue';

const clicks = ref(0);
</script>

<template>
    <div class="container mt-5">
        <h1 class="title">Buttons</h1>
        <p class="subtitle">Bulma button wrapper with prop validation.</p>

        <h2 class="title is-5">Colors</h2>
        <div class="buttons">
            <Button label="Default"></Button>
            <Button color="primary" label="Primary"></Button>
            <Button color="link" label="Link"></Button>
            <Button color="success" label="Success"></Button>
            <Button color="danger" label="Danger"></Button>
            <Button color="warning" label="Warning"></Button>
            <Button color="info" label="Info"></Button>
            <Button color="dark" label="Dark"></Button>
            <Button color="text" label="Text"></Button>
        </div>

        <h2 class="title is-5 mt-5">Sizes</h2>
        <div class="buttons are-align-items-center">
            <Button size="small" color="primary">Small</Button>
            <Button color="primary">Normal</Button>
            <Button size="medium" color="primary">Medium</Button>
            <Button size="large" color="primary">Large</Button>
        </div>

        <h2 class="title is-5 mt-5">Variants</h2>
        <div class="buttons">
            <Button color="primary" variant="outlined">Outlined</Button>
            <Button color="link" variant="light">Light</Button>
            <Button color="danger" variant="inverted">Inverted</Button>
            <Button color="success" rounded>Rounded</Button>
            <Button color="info" loading>Loading</Button>
            <Button color="warning" disabled>Disabled</Button>
        </div>

        <h2 class="title is-5 mt-5">Usage</h2>
        <Button color="primary" @click="clicks++">Clicked {{ clicks }} times</Button>

        <h2 class="title is-5 mt-5">Full width</h2>
        <Button color="dark" fullwidth>Full Width Action</Button>
    </div>
</template>