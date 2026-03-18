<script setup>
import { computed } from 'vue';

const props = defineProps({
    color: {
        type: String,
        validator(value) {
            return [
                'dark',
                'primary',
                'danger',
                'warning',
                'success',
                'link',
                'info',
                'text'
            ].includes(value);
        }
    },
    size: {
        type: String,
        validator(value) {
            return [
                'small',
                'medium',
                'large'
            ].includes(value);
        }
    },
    variant: {
        type: String,
        validator(value) {
            return [
                'outlined',
                'inverted',
                'light'
            ].includes(value);
        }
    },
    label: {
        type: String,
        default: ''
    },
    rounded: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    },
    fullwidth: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'button',
        validator(value) {
            return [
                'button',
                'submit',
                'reset'
            ].includes(value);
        }
    }
});

const classes = computed(() => ({
    [`is-${props.color}`]: !!props.color,
    [`is-${props.size}`]: !!props.size,
    [`is-${props.variant}`]: !!props.variant,
    'is-rounded': props.rounded,
    'is-loading': props.loading,
    'is-fullwidth': props.fullwidth
}));
</script>

<template>
    <button class="button" :class="classes" :type="type" :disabled="disabled || loading">
        <slot>{{ label }}</slot>
    </button>
</template>