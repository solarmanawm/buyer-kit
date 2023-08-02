<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default {
    name: 'VContainer',
};
</script>

<style lang="sass" scoped>
.container
    width: 100%
    margin: 0 auto

@media screen and (min-width: 576px)
    .container
        max-width: 540px

@media screen and (min-width: 768px)
    .container
        max-width: 720px

@media screen and (min-width: 992px)
    .container
        max-width: 960px

@media screen and (min-width: 1200px)
    .container
        max-width: 1140px
</style>