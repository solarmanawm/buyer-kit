<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<script>
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