<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default {
    name: 'VRow',
};
</script>

<style lang="sass" scoped>
.row
    display: flex
    flex-wrap: wrap
    margin: 0 -0.5rem
</style>